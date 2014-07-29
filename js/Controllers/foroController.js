/************************************************************* CONTROLADORES *****************************************************************/

angular.module('module').controller('foroController', function($scope, $http, $rootScope) {
	$scope.topics = temas;
	$scope.comments = comentarios;
	$scope.users = usuarios;
	$scope.trendings = trendingTopics;
	$scope.titulo = 'editar';

	$scope.eliminar = function(index){
		$scope.topics.splice(index,1);
		$('.modal-backdrop').remove();
	}

	$scope.visible = $rootScope.usuarioLogueado.rol == "profesor";
});


angular.module('module').controller('AgregarTema', function ($scope) {
	$scope.message = '';
	$scope.respuestas = 0;
	$scope.titulo = '';
	$scope.contenido = '';
	$scope.vistas = 0;
	$scope.mensaje = 'Hace 1 minuto';
	$scope.estudiantes = [];
	$scope.show = false;

	$scope.nuevoTema = function () {
		temas.unshift({
			message: $scope.message,
			respuestas: $scope.respuestas,
			titulo: $scope.titulo,
			contenido: 'Este es un tema para la clase de ' + $scope.titulo + ' del primer cuatrimestre 2014',
			vistas: $scope.vistas,
			mensaje: $scope.mensaje,
			estudiantes: $scope.estudiantes,
			show: $scope.show
		});
		/*console.log(temas);*/
		$scope.message = '';
		$scope.titulo = '';
		$scope.contenido = '';
		$scope.estudiantes = [];
	}
});

angular.module('module').controller('EditarTema', function($scope) {
	$scope.topics = temas;
	$scope.nombreEstudiante = null;

	$scope.editTema = function (index) {
		$scope.topicCurrentIndex = index;

		$scope.topics[index].estudiantes.push({
			estudiante : $scope.nombreEstudiante,
			eliminado: false
		});

		$scope.nombreEstudiante = null;
	}

	$scope.deseleccionar = function (topicIndex, index) {
		//$scope.topicCurrentIndex = index;
		$scope.topics[topicIndex].estudiantes[index].eliminado = !$scope.topics[topicIndex].estudiantes[index].eliminado;
	}

	$scope.asignarIndex = function(index) {

		$scope.topicCurrentIndex = index;
	}

	$scope.eliminarEstudiante = function (index) {
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

angular.module('module').controller('ComentarForo', function ($scope) {
	$scope.message = '';

	$scope.agregarComentario = function () {
		comentarios.push({
			carrera: 'Diseño Web',
			titulo: 'Programación Web Dinámica',
			contenido: $scope.message,
			info: 'Escrito hace 1 minuto',
			puntaje: null
		});
		$scope.message = '';
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
	show: true
},
{
	respuestas: 14,
	titulo: 'Diseño Web 1',
	contenido: 'Este es un tema para la clase de diseño web 1 del primer cuatrimestre 2014',
	vistas: 6,
	mensaje: 'Hace 3 horas',
	estudiantes : [],
	show: true
},
{
	respuestas: 32,
	titulo: 'Diseño Web 2',
	contenido: 'Este es un tema para la clase de diseño web 1 del primer cuatrimestre 2014',
	vistas: 2,
	mensaje: 'Hace 15 minutos',
	estudiantes : [],
	show: true
},
{
	respuestas: 5,
	titulo: 'Ingles 2',
	contenido: 'Este es un tema para la clase de Ingles 2 del primer cuatrimestre 2014',
	vistas: 14,
	mensaje: 'Hace 7 horas',
	estudiantes : [],
	show: true
},
{
	respuestas: 45,
	titulo: 'Bases de datos',
	contenido: 'Este es un tema para la clase de bases de datos del primer cuatrimestre 2014',
	vistas: 8,
	mensaje: 'Hace 4 horas',
	estudiantes : [],
	show: true
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
	contenido: 'Diseño Web',
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