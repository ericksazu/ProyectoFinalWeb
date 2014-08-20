/************************************************************* CONTROLADORES *****************************************************************/

angular.module('module').controller('foroController', function($scope, $http, $rootScope, $route) {


	$scope.topics = [];
	$scope.correoUsuario = $scope.usuarioLogueado.email;
	$scope.informacion = {};
	$scope.estudiantes = [];
	$scope.emailEstudiante = "hhh";

	$scope.nuevoTema = function() {
		$scope.informacion = {};
	};

	

	$scope.abrirComentarios = function($index){

		$http({
			url: 'phpConexion/temasForo.php',
			method: 'GET',
			params: {idForo: $scope.topics[$index].idForo}
		}).success(function(data){
			console.log(data);
		});
		
	}

	$http.get('phpConexion/login/usuarios.php').success(function(data) {
		$scope.usuarios = data;
		$scope.usuariosForo = [];

		for (var i = 0; i < $scope.usuarios.length; i++) {
			if($scope.usuarios[i].nivelUniversitario == 'Estudiante'){
				$scope.usuariosForo.push($scope.usuarios[i].email);
			}
		};
	});

	$scope.buscarNombres = function(){
		console.log('entra al buscador');
		$('#tags').autocomplete({
			source: $scope.usuariosForo,
			select: function( event, ui ) {
				$scope.emailEstudiante = ui.value;
			}
		});
	}



	
	$http.get('phpConexion/foros.php').success(function(data) {
		$scope.topics = data;
	});

	$scope.numberOfPagesTemas = function(){
		return Math.ceil($scope.topics.length/$scope.pageSize);
	}

	$scope.numberOfPagesTema = function(){
		return Math.ceil($scope.comments.length/$scope.pageSize);
	}

	$scope.eliminar = function(index){
		//alert(index);
		var id = $scope.topics[index].idForo;
		console.log(id);

		$http.post('phpConexion/eliminarForo.php', {'id': id}).success(function(data, status) {
			console.log("inserted good");
			$scope.algo = data;
		}).error(function(data, status) {
			console.log("inserted bad");
		});
		
		$route.reload();
		$('#modalEliminar').modal('hide');
		$('.modal-backdrop').remove();

	}


	$scope.agregarEstudiante = function(index){
		console.log('entra a agregar estudiante');
		var id = $scope.informacion.idForo;
		console.log('campo',$scope.emailEstudiante);

		var email = $scope.emailEstudiante;

		$http.post('phpConexion/agregarEstudianteForo.php', {'idForo': id,'emailEstudiante': email}).success(function(data, status) {
			console.log("inserted good");
			$scope.estudiantes = data;
		}).error(function(data, status) {
			console.log("inserted bad");
		});
	};

	$scope.currentPage = 0;
	$scope.pageSize = 5;

	//$scope.topics = temas;


	$scope.editarForo = function(index){
		$scope.buscarNombresModal = function(index){
			console.log('entra al buscador');
			$('#tags2').autocomplete({
				source: $scope.usuariosForo,
				select: function( event, ui ) {
					 $scope.$apply(function(){
					 	//console.log(ui.item.vale);
					 	$scope.emailEstudiante = ui.item.value;
					 });
				}
			});
		//$('#tags2').autocomplete('option','appendTo','#prueba');
	};
	
	var id = $scope.topics[index].idForo;
	$http.post('phpConexion/editarInfoForo.php', {'id': id}).success(function(data, status) {
		console.log("inserted good");
		$scope.informacion = data;
		console.log($scope.informacion);
	}).error(function(data, status) {
		console.log("inserted bad");
	});

	
}	



$scope.cerrarForo = function(index){
	var estado = 1;
	console.log(index);
	var id = $scope.topics[index].idForo;
	console.log(id);
	console.log(estado);

	$http.post('phpConexion/cerrarForo.php', {'idForo2': id, 'estado': estado}).success(function(data, status) {
		console.log("inserted good");
		$scope.algo = data;
	}).error(function(data, status) {
		console.log("inserted bad");
	});

	$("#foroCerrado").removeClass('hidden');
	$("#foroCerrado").addClass('visible');

};

$scope.nombreEstudiante = null;

$scope.editTema = function (index) {

	console.log('entra a editar', $scope.informacion);
	$http.post('phpConexion/agregarForo.php', $scope.informacion).success(function(data, status) {
		console.log("inserted good", data);

		$http.post('phpConexion/editarInfoForo.php', {id: data }).success(function(data, status) {
			console.log("inserted good");
			$scope.informacion = data;
			console.log($scope.informacion);
		}).error(function(data, status) {
			console.log("inserted bad");
		});
		
		$http.get('phpConexion/foros.php').success(function(data) {
			$scope.topics = data;
			console.log('refresca items');
		});
	}).error(function(data, status) {
		console.log("inserted bad");
	});


	//$('#myModalEditarTema').modal('hide');

	//$route.reload();

	

};



$scope.users = usuarios;
$scope.trendings = trendingTopics;
$scope.titulo = 'editar';





$scope.visible = $rootScope.usuarioLogueado.idRol == 13;




});

angular.module('module').controller('ForoTopicController', function($scope, $routeParams,$http, $rootScope) {
	$scope.comments = [];
	$scope.usuarios =[];
	$scope.usuario = [];

	$scope.idForo = $routeParams.idForo;

	$scope.estado = $routeParams.estado;


	if($scope.estado == 1){
		$("#btnComentar").addClass('hidden');	
	}
	
	$http.get('phpConexion/login/usuarios.php').success(function(data) {
		$scope.usuarios = data;
	});

	$http.post('phpConexion/obtenerTemaForo.php', {'id': $scope.idForo}).success(function(data, status) {
		console.log("inserted good");
		$scope.foro = data;
	}).error(function(data, status) {
		console.log("inserted bad");
	});


	$scope.currentPage = 0;
	$scope.pageSize = 5;

	$scope.numberComments = function() {
		return Math.ceil($scope.comments.length/$scope.pageSize);
	};

	console.log($routeParams);

	$http.post('phpConexion/obtenerComentarios.php', 
		{'idForo': $routeParams.idForo}).success(function(data, status) {
			console.log("inserted good");
			$scope.comments = data;
		}).error(function(data, status) {
			console.log("inserted wrong");
		});

		$scope.agregarComentario = function () {

			$http.post('phpConexion/agregarComentarioForo.php', 
				{'id': $scope.idForo, 'descripcion': $scope.comentario, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
					console.log("comentario agregado bd");
					$http.post('phpConexion/obtenerComentarios.php', 
						{'idForo': $routeParams.idForo}).success(function(data, status) {
							console.log("inserted good");
							$scope.comments = data;
						}).error(function(data, status) {
							console.log("inserted wrong");
						});
					}).error(function(data, status) {
						console.log("no se agrego nada");
					});


					$('#myModalForoComment').modal('hide');

					$('#alertComentarioForo').css('display','block');
					setTimeout(function() {
						$('#alertComentarioForo').css('display','none');
					}, 3000);

				}


			});


angular.module('module').controller('AgregarTema', function ($http, $scope) {
	$scope.message = '';
	$scope.respuestas = 0;
	$scope.titulo = '';
	$scope.contenido = '';
	$scope.vistas = 0;
	$scope.mensaje = 'Hace 1 minuto';
	$scope.estudiantes = [];
	$scope.show = false;
	$scope.fechaInicio = '';
	$scope.fechaCierre = '';

	
	$scope.buscarNombresModal = function(index){
		console.log('entra al buscador');
		$('#tags2').autocomplete({
			source: $scope.usuariosForo
		});
		//$('#tags2').autocomplete('option','appendTo','#prueba');
	}
	

});

angular.module('module').controller('EditarTema', function ($scope, $http, $route) {

	$http.get('phpConexion/foros.php').success(function(data) {
		$scope.topics = data;
		/*console.log($scope.publicaciones[0].comments[0]);*/
	});



	$scope.topics = temas;
	


	$scope.deseleccionarEliminado = function (topicIndex, index) {
		//$scope.topicCurrentIndex = index;
		$scope.topics[topicIndex].estudiantes[index].eliminado = !$scope.topics[topicIndex].estudiantes[index].eliminado;
	}

	$scope.deseleccionarAsistente = function (topicIndex, index) {
		for (var i = 0; i < $scope.topics[topicIndex].estudiantes.length; i++) {
			$scope.topics[topicIndex].estudiantes[i].asistente = false;
			/*console.log(i);*/
		};

		$scope.topics[topicIndex].estudiantes[index].asistente = !$scope.topics[topicIndex].estudiantes[index].asistente;
	}

	/*$scope.asignarIndex = function(index) {
		$scope.topicCurrentIndex = index;
	}*/

	$scope.eliminarEstudiante = function (index) {
		console.log($scope.topics[index].estudiantes);
		var kill = [];

		for (var i = 0; i < $scope.topics[index].estudiantes.length; i++) {
			if($scope.topics[index].estudiantes[i].eliminado === true){
				kill.push(i);
			}
		}
		/*console.log(kill);*/
		for (var i = kill.length - 1; i >= 0; i--){
			/*console.log(kill[i], $scope.topics[index].estudiantes[kill[i]], $scope.topics[index].estudiantes);*/
			$scope.topics[index].estudiantes.splice(kill[i], 1); /*(kill[i] - 1, 1)*/
		};
	}

	$scope.mostrarTema = function (index) {
		$scope.topics[index].show = true;
		if($scope.topics[index].titulo === ''){
			$scope.topics.splice(index,1);
			$('.modal-backdrop').remove();
		}

		$scope.topics[index].fechaInicio = $scope.fechaInicio;
		$scope.topics[index].fechaCierre = $scope.fechaCierre;

		console.log(temas);
	}

	$scope.salirModal = function (index) {
		if($scope.topics[index].titulo === ''){
			$scope.topics.splice(index,1);
			$('.modal-backdrop').remove();
		}
	}
});

angular.module('module').controller('RatingCtrl', function ($scope) {
	$scope.rating = 5;
	$scope.isDisabled = false;

    /*$scope.rateFunction = function (rating) {
      alert('Rating selected is ' + rating);
  };*/

  $scope.guardarPuntuacion = function () {
  	/*comentarios[0].puntaje = $scope.rating;*/
  	$scope.isDisabled = true;
  	return false;
  }
});

angular.module('module').controller('ComentarForo', function ($scope,$http, $routeParams, $rootScope) {
	$scope.message = '';
	$scope.comentario =[];
	console.log($rootScope.usuarioLogueado.idUsuario);

	

});

angular.module('module').controller('AgregarDenuncia', function ($scope) {
	$scope.denuncia = '';

	$scope.agregarDenuncia = function () {
		denuncias.push({
			tema: 'Programación Web Dinámica',
			denuncia: $scope.denuncia
		});

		$scope.denuncia = '';
		$('#myModalForoDenuncia').modal('hide');

		$('#alertDenunciaForo').css('display','block');
		setTimeout(function() {
			$('#alertDenunciaForo').css('display','none');
		}, 3000);

		console.log(denuncias);
	}

});


/********************************************* DIRECTIVAS *******************************************************/

angular.module('module').directive('sectionHeader', function () {
	/*console.log('dasdsad');*/
	return {
		restrict: 'E',
		templateUrl: 'views/sectionheader.html'
	};
});

angular.module('module').directive('trendingTopic', function () {
	/*console.log('topic');*/
	return {
		restrict: 'E',
		templateUrl: 'views/trending-topic.html'
	};
});

angular.module('module').directive('paginationModule', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/pagination.html'
	};
});

angular.module('module').directive('starRating', function() {
	return {
		restrict : 'A',
		template : '<ul class="rating">' + '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' + '\u2605' + '</li>' + '</ul>',
		scope : {
			ratingValue : '=',
			max : '=',
			onRatingSelected : '&'
		},
		link : function (scope, elem, attrs) {
			var updateStars = function() {
				scope.stars = [];
				for ( var i = 0; i < scope.max; i++) {
					scope.stars.push({filled : i < scope.ratingValue});
				}
			};

			scope.toggle = function (index) {
				scope.ratingValue = index + 1;
				scope.onRatingSelected({rating : index + 1});
			};

			scope.$watch('ratingValue', function (oldVal, newVal) {
				if (newVal) {
					updateStars();
				}
			});
		}
	};
});


/***************************************************** VARIABLES OBJETOS ***************************************************************/

var usuarios =
{
	administrador: false,
	rector: true,
	director: false,
	profesor: true,
	asistente: false,
	estudiante: false
};

var temas = [
{
	respuestas: 23,
	titulo: 'Programación Web Dinámica',
	contenido: 'Este es un tema para la clase de programación web dinámica del primer cuatrimestre 2014',
	vistas: 15,
	mensaje: 'Hace 5 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 14,
	titulo: 'Diseño Web 1',
	contenido: 'Este es un tema para la clase de diseño web 1 del primer cuatrimestre 2014',
	vistas: 6,
	mensaje: 'Hace 3 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 32,
	titulo: 'Diseño Web 2',
	contenido: 'Este es un tema para la clase de diseño web 1 del primer cuatrimestre 2014',
	vistas: 2,
	mensaje: 'Hace 15 minutos',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 5,
	titulo: 'Ingles 2',
	contenido: 'Este es un tema para la clase de Ingles 2 del primer cuatrimestre 2014',
	vistas: 14,
	mensaje: 'Hace 7 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true,
	fechaInicio: '',
	fechaCierre: ''
}
];

var comentarios = [
{
	carrera: 'Diseño Web',
	titulo: 'Programación Web Dinámica',
	contenido: '¿Alguien sabe como hacer una matriz?',
	info: 'Escrito hace 4 horas',
	puntaje: null
},
{
	carrera: 'Diseño Web',
	titulo: 'Programación Web Dinámica',
	contenido: 'Pregúntele al profesor Beita',
	info: 'Escrito hace 2 horas',
	puntaje: null
},
{
	carrera: 'Diseño Web',
	titulo: 'Programación Web Dinámica',
	contenido: 'Yo no tengo idea de como se hace...',
	info: 'Escrito hace 1 hora',
	puntaje: null
}
];

var denuncias = [
{
	tema: 'Programación Web Dinámica',
	denuncia: 'Diseño Web'

},
{
	tema: 'Programación Web Dinámica',
	denuncia: 'Diseño Web'
},
{
	tema: 'Programación Web Dinámica',
	denuncia: 'Diseño Web'
}
];

var trendingTopics = [
{
	tema: 'Programación web dinámica',
	contenido: 'Hola, Bueno, es bastante simple Por ejemplo así: var matriz = new Array(3); for (i = 0; i < 3; i++); matriz[i]=new Array(3); Eso te crea un array de 3 x 3 y lo rellenas así por ejemplo: matriz[0][0]="contenido 1"; matriz[0][1]="contenido 2";',
	fecha: '14 febrero 2014',
	foro: 'Programación web dinámica',
	posicion : 1
},
{
	tema: 'Programación web dinámica',
	contenido: 'Las variables en los lenguajes de programación siguen una lógica similar a las variables utilizadas en otros ámbitos como las matemáticas. Una variable es un elemento que se emplea para almacenar y hacer referencia a otro valor. ',
	fecha: '14 febrero 2014',
	foro: 'Programación web dinámica',
	posicion : 2
},
{
	tema: 'Programación web dinámica',
	contenido: 'La programación basada ​​en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos.',
	fecha: '14 febrero 2014',
	foro: 'Programación web dinámica',
	posicion : 3
}
];