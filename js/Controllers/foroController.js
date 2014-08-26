/************************************************************* CONTROLADORES *****************************************************************/

angular.module('module').controller('foroController', function($scope, $http, $rootScope, $route) {


	$scope.topics = [];
	$scope.correoUsuario = $scope.usuarioLogueado.email;
	$scope.informacion = {};
	$scope.estudiantes = [];
	$scope.emailEstudiante = "hhh";
	$scope.listaEstudiantes = [];
	$scope.estudiantesEliminados = [];
	$scope.estudianteAsistente = [];
	$scope.listaAsistentes = [];
	$scope.fecha =[];
	$scope.llenar = [];

	$scope.nuevoTema = function() {
		$scope.informacion = {};
	};

	

	$scope.abrirComentarios = function($index){

		/*var visitas =  0 
		   visitas = visitas+1;



		$http.post('phpConexion/insertarVisitasForo.php', {'visitas': visitas,'idForo': id}).success(function(data, status) {
			console.log("inserted good");
			$scope.algo = data;
			console.log($scope.informacion);
		}).error(function(data, status) {
			console.log("inserted bad");
		});*/

$http({
	url: 'phpConexion/temasForo.php',
	method: 'GET',
	params: {idForo: $scope.topics[$index].idForo}
}).success(function(data){
	console.log(data);
});



}

$http.post('phpConexion/llenar.php').success(function(data, status) {
					console.log("inserted good");
					$scope.llenar = data;
				}).error(function(data, status) {
					console.log("inserted wrong");
				});

$http.get('phpConexion/login/usuarios.php').success(function(data) {
	$scope.usuarios = data;
	$scope.usuariosForo = [];

	for (var i = 0; i < $scope.usuarios.length; i++) {
		
		$scope.usuariosForo.push($scope.usuarios[i].email);
		
	};
});



$http.get('phpConexion/foros.php').success(function(data) {
	$scope.topics = data;
	console.log($scope.topics);
});



$scope.numberOfPagesTemas = function(){
	return Math.ceil($scope.topics.length/$scope.pageSize);
}

$scope.numberOfPagesTema = function(){
	return Math.ceil($scope.comments.length/$scope.pageSize);
}

$scope.eliminar = function(id){
		//alert(index);

		

		$http.post('phpConexion/eliminarForo.php', {'id': id}).success(function(data, status) {
			console.log("inserted good");
			$http.get('phpConexion/foros.php').success(function(data) {
				$scope.topics = data;
			});
			$scope.algo = data;
		}).error(function(data, status) {
			console.log("inserted bad");
		});
		
		

	}


	$scope.agregarEstudiante = function(index){
		console.log('entra a agregar estudiante');
		var id = $scope.informacion.idForo;
		console.log('campo',$scope.emailEstudiante);

		var email = $scope.emailEstudiante;

		$http.post('phpConexion/agregarEstudianteForo.php', {'idForo': id,'emailEstudiante': email}).success(function(data, status) {
			console.log("inserted good");
			$scope.estudiantes = data;

			$http.post('phpConexion/obtenerEstudiantesForo.php', {'idForo': id}).success(function(data, status) {
				
				$scope.listaEstudiantes = data;
			}).error(function(data, status) {
				console.log("inserted bad");
			});


		}).error(function(data, status) {
			console.log("inserted bad");
		});

		$scope.emailEstudiante = '';
	};

	$scope.currentPage = 0;
	$scope.pageSize = 5;

	//$scope.topics = temas;


	$scope.editarForo = function(id){
		$scope.buscarNombresModal = function(id){
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
	
	

	$http.post('phpConexion/editarInfoForo.php', {'id': id}).success(function(data, status) {
		console.log("inserted good");
		$scope.informacion = data;
		$http.post('phpConexion/obtenerEstudiantesForo.php', {'idForo': id}).success(function(data, status) {
			
			$scope.listaEstudiantes = data;

		}).error(function(data, status) {
			console.log("inserted bad");
		});
		
	}).error(function(data, status) {
		console.log("inserted bad");
	});


	$http.post('phpConexion/obtenerAsistente.php', {'idForo': id}).success(function(data, status) {
		
		$scope.listaAsistentes = data;
		
	}).error(function(data, status) {
		
	});


	$http.post('phpConexion/obtenerFechaComentario.php', {'idForo': $scope.informacion.idForo}).success(function(data, status) {
		console.log("inserted good", data);
		$scope.fecha = data;
	}).error(function(data, status) {
		console.log("inserted bad");
	});
}	


$scope.deseleccionarEliminado = function (idUsuario) {
		//$scope.topicCurrentIndex = index;

		var indexEliminar = -1;

		for (var i = 0; i < $scope.estudiantesEliminados.length; i++) {
			if (parseInt($scope.estudiantesEliminados[i]) == idUsuario) {
				indexEliminar = i;
			}
		}
		if (indexEliminar>-1) {
			$scope.estudiantesEliminados.splice(indexEliminar, 1);
		}
		else {
			$scope.estudiantesEliminados.push(idUsuario);
		}
	};

	$scope.eliminarEstudiantesSeleccionados = function() {
		for (var i = 0; i < $scope.estudiantesEliminados.length; i ++) {

			$http.post('phpConexion/eliminarEstudianteForo.php', {'idUsuario': $scope.estudiantesEliminados[i], 'idForo':$scope.informacion.idForo }).success(function(data, status) {
				console.log("inserted good");
				$http.post('phpConexion/obtenerEstudiantesForo.php', {'idForo': $scope.informacion.idForo}).success(function(data, status) {
					
					$scope.listaEstudiantes = data;
				}).error(function(data, status) {
					console.log("inserted bad");
				});
				
			}).error(function(data, status) {
				console.log("inserted bad");
			});
		}
		$scope.estudiantesEliminados = [];
	};


	$scope.seleccionarAsistente = function (idUsuario) {
		//$scope.topicCurrentIndex = index;

		var indexEliminar = -1;

		for (var i = 0; i < $scope.estudianteAsistente.length; i++) {
			if (parseInt($scope.estudianteAsistente[i]) == idUsuario) {
				indexEliminar = i;
			}
		}
		if (indexEliminar>-1) {
			$scope.estudianteAsistente.splice(indexEliminar, 1);
		}
		else {
			$scope.estudianteAsistente.push(idUsuario);
		}

		
	};

	$scope.asignarAsistente = function() {
		for (var i = 0; i < $scope.estudianteAsistente.length; i ++) {

			$http.post('phpConexion/agregarAsistente.php', {'idUsuario': $scope.estudianteAsistente[i], 'idForo':$scope.informacion.idForo }).success(function(data, status) {
				console.log("inserted good");
				$http.post('phpConexion/obtenerEstudiantesForo.php', {'idForo': $scope.informacion.idForo}).success(function(data, status) {
					console.log("inserted good", data);
					$scope.listaEstudiantes = data;
				}).error(function(data, status) {
					console.log("inserted bad");
				});
				
			}).error(function(data, status) {
				console.log("inserted bad");
			});
		}

	};





	$scope.cerrarForo = function(id){
		var estado = 1;
		console.log(index);
		var id = $scope.topics[id].idForo;
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

	$scope.editTema = function (id) {

		$scope.estudiantesEliminados = [];

		console.log('entra a editar', $scope.informacion);
		$scope.informacion.email = $rootScope.usuarioLogueado.email;
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

console.log('rol usuarioooo', $rootScope.usuarioLogueado);


//funcionalidad roles profesor y director
$scope.visible = $rootScope.usuarioLogueado.idRol == 13 || $rootScope.usuarioLogueado.idRol == 16;

$scope.esDueno = function(email) {
	if ($rootScope.usuarioLogueado.idRol == 16) {
		return true;
	}
	if (email == $rootScope.usuarioLogueado.email) {
		return true;
	}
	else {
		return false;
	}


};


$scope.rateFunction = function (rating) {
	alert('Rating selected is ' + rating);
};




});

angular.module('module').controller('ForoTopicController', function($scope, $routeParams,$http, $rootScope) {
	$scope.comments = [];
	$scope.usuarios =[];
	$scope.usuario = [];
	$scope.estudiantesForo = [];

	$scope.idForo = $routeParams.idForo;

	$scope.estado = $routeParams.estado;

	$scope.visible = $rootScope.usuarioLogueado.idRol == 13 || $rootScope.usuarioLogueado.idRol == 16;

	$scope.puedeComentar = true;
	

	$scope.cuenta = !$scope.cuenta;

	if ($scope.cuenta) {
		console.log('cuenta', $scope.cuenta);
		$http.post('phpConexion/insertarVisitasForo.php', {idForo: $scope.idForo}).success(function(data) {

		});
	}

	if($scope.estado == 1){
		$("#btnComentar").addClass('hidden');	
	}
	
	$http.get('phpConexion/login/usuarios.php').success(function(data) {
		$scope.usuarios = data;
	});

	$http.post('phpConexion/obtenerTemaForo.php', {'id': $scope.idForo}).success(function(data, status) {
		
		$scope.foro = data;

		$http.post('phpConexion/obtenerEstudiantesForo.php', {'idForo': $routeParams.idForo}).success(function(data) {
			if ($rootScope.usuarioLogueado.email == $scope.foro.usuarioCreado) {
				$scope.puedeComentar = true;
			}
			if ($rootScope.usuarioLogueado.idRol == 12 || $rootScope.usuarioLogueado.idRol == 13 ) {
				$scope.puedeComentar = false;
				for (var i = 0; i < data.length; i++) {
					
					if (data[i].idUsuario == $rootScope.usuarioLogueado.id) {
						$scope.puedeComentar = true;
					}
				}
			}
			
		});

	}).error(function(data, status) {
		console.log("inserted bad");
	});

	




	$scope.currentPage = 0;
	$scope.pageSize = 5;

	$scope.numberComments = function() {
		return Math.ceil($scope.comments.length/$scope.pageSize);
	};

	

	$http.post('phpConexion/obtenerComentarios.php', 
		{'idForo': $routeParams.idForo, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
			console.log("inserted good");
			$scope.comments = data;
			console.log($scope.comments.length);
			$http.post('phpConexion/agregarRespuestas.php', 
				{'idForo': $routeParams.idForo, 'respuestas': $scope.comments.length}).success(function(data, status) {
					console.log("inserted good");
					$scope.algo = data;
				}).error(function(data, status) {
					console.log("inserted wrong");
				});
			}).error(function(data, status) {
				console.log("inserted wrong");
			});


			$http.post('phpConexion/llenar.php').success(function(data, status) {
					console.log("inserted good");
					$scope.llenar = data;
				}).error(function(data, status) {
					console.log("inserted wrong");
				});



			var respuestas = 0;
			for(var i=0; i < $scope.comments.length; i++){
				respuestas = respuestas +1;
			}

			console.log('cantidad de respuestas' + respuestas);

			$scope.agregarComentario = function () {

				$http.post('phpConexion/agregarComentarioForo.php', 
					{'id': $scope.idForo, 'descripcion': $scope.comentario, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
						console.log("comentario agregado bd");
						$http.post('phpConexion/obtenerComentarios.php', 
							{'idForo': $routeParams.idForo, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
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

					};

					$scope.agregarDenuncia = function(id){

						console.log($scope.denuncia);

						$http.post('phpConexion/agregarDenuncia.php', {'descripcion': $scope.denuncia, 'idComentario': id}).success(function(data, status) {
							console.log("inserted good");
							$scope.algo = data;
						}).error(function(data, status) {
							console.log("inserted bad");
						});
					};

					$scope.puntuacion = function(){

					};


					$scope.marca = function(index, votos) {
		//console.log(index, votos);
		if (index <= votos) {
			return "glyphicon glyphicon-star yellow"
		}
		else {
			return "glyphicon glyphicon-star stars";
		}
	}

	$scope.rateFunction = function(rate, idComentario, estrellas) {

if (estrellas != null) {
	$http.post('phpConexion/obtenerComentarios.php', 
							{'idForo': $routeParams.idForo, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
								console.log("inserted good");
								$scope.comments = data;
							}).error(function(data, status) {
								console.log("inserted wrong");
							});
							return;
}
		

		$http.post('phpConexion/agregarPuntuacion.php', {'estrellas': rate, 'idComentario': idComentario, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
			$http.post('phpConexion/obtenerComentarios.php', 
							{'idForo': $routeParams.idForo, 'idUsuario': $rootScope.usuarioLogueado.id}).success(function(data, status) {
								console.log("inserted good");
								$scope.comments = data;
							}).error(function(data, status) {
								console.log("inserted wrong");
							});
			$scope.algo = data;

		}).error(function(data, status) {
			console.log("inserted bad");
		});

	}




}); //cierra forotopic




angular.module('module').controller('RatingCtrl', function ($scope) {
	$scope.rating = 5;
	$scope.isDisabled = false;



	$scope.guardarPuntuacion = function () {
		/*comentarios[0].puntaje = $scope.rating;*/
		$scope.isDisabled = true;
		return false;
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