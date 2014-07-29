(function () {
	
	var confApp = function($routeProvider){
		
		$routeProvider.when("/",{
			controller: "signupController",
			templateUrl: "views/login.html"
		}).when("/documentos",{
			controller: "documentosController",
			templateUrl: "views/documentos.html" 
		}).when("/visualizarDocumentos",{
			controller: "visualizarDocumentosController",
			templateUrl: "views/visualizarDocumentos.html" 
		}).when("/blog",{
			controller: "blogController",
			templateUrl: "views/blog.html" 
		}).when("/secciones",{
			controller: "seccionesController",
			templateUrl: "views/secciones.html" 
		}).when("/configuracion",{
			controller: "configuracionController",
			templateUrl: "views/configuracion.html" 
		}).when("/foro",{
			controller: "foroController",
			templateUrl: "views/foros.html" 
		}).when("/foro-topic", {
			controller: "foroController",
			templateUrl: "views/foro-topic.html"
		});
	}

	var app = angular.module('module',['ngRoute']).config(confApp);

	app.run(function ($rootScope, $location) {

		$rootScope.roles = [{
			'page': 'secciones',
			'roles': ['profesor', 'estudiante', 'asistente','administrador']
		},
		{
			'page': 'blog',
			'roles': ['profesor', 'estudiante']
		},
		{
			'page': 'documentos',
			'roles': ['estudiante', 'profesor']
		},
		{
			'page': 'foro',
			'roles': ['estudiante', 'profesor']
		},
		{
			'page': 'configuracion',
			'roles': ['administrador']
		}
		];



		$rootScope.$on('$routeChangeStart', function (event) {
			var $rScope = this;
			if ($location.$$path == "/") {
				$rootScope.showheader = 1;
			}
			else {

				$rootScope.showheader = 0;
				if ($rootScope.usuarioLogueado == null) {
					$location.url('/');
				}
				else {
					var posicion = -1;
					for (var i = 0; i < $rootScope.roles.length; i++) {
						if ('/'+$rootScope.roles[i].page == $location.$$path) {
							posicion = i;
						}
					}
					if (posicion > -1) {

						console.log($rootScope.usuarioLogueado.rol, $rootScope.roles[posicion].roles);
						if ($rootScope.roles[posicion].roles.indexOf($rootScope.usuarioLogueado.rol) == -1) {
							$location.url('/');
						}
					}
				}

			}
			
		});
		$rootScope.usuarioLogueado = null;
		
		
	});

app.directive('moduleHeader', function ($route) {

	return {
		restrict: 'E',
		templateUrl: 'header.html'
	};

});

app.directive('moduleFooter', function ($route) {

	return {
		restrict: 'E',
		templateUrl: 'footer.html'
	};

});

app.controller('indexController', ['$scope', function($scope) {

}]);










})


();



