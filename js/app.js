(function() {

    var confApp = function($routeProvider) {

        $routeProvider.when("/", {
            controller: "signupController",
            templateUrl: "views/login.html"
        }).when("/documentos", {
            controller: "documentosController",
            templateUrl: "views/documentos.html"
        }).when("/visualizarDocumentos", {
            controller: "visualizarDocumentosController",
            templateUrl: "views/visualizarDocumentos.html"
        }).when("/blog", {
            controller: "blogController",
            templateUrl: "views/blog.html"
        }).when("/secciones", {
            controller: "infousuarioController",
            templateUrl: "views/secciones.html"
        }).when("/configuracion", {
            controller: "infousuarioController",
            templateUrl: "views/configuracion.html"
        }).when("/foro", {
            controller: "foroController",
            templateUrl: "views/foros.html"
        }).when("/foro-topic", {
            controller: "foroController",
            templateUrl: "views/foro-topic.html"
        }).when("/editar", {
            controller: "",
            templateUrl: "views/Editar.html"
        });
    }

    var app = angular.module('module', ['ngRoute', 'mgcrea.ngStrap', 'ui.bootstrap']).config(confApp);

    app.run(function($rootScope, $location) {

        $rootScope.roles = [{
            'page': 'secciones',
            'roles': ['13', '12', '14']
        }, {
            'page': 'blog',
            'roles': ['13', '12']
        }, {
            'page': 'documentos',
            'roles': ['12', '13']
        }, {
            'page': 'foro',
            'roles': ['12', '13']
        }, {
            'page': 'configuracion',
            'roles': ['14']
        }];





        $rootScope.$on('$routeChangeStart', function(event) {

            var $rScope = this;
            if ($location.$$path == "/") {
                $rootScope.showheader = 1;
            } else {

                $rootScope.showheader = 0;
                if ($rootScope.usuarioLogueado == null) {
                    $location.url('/');
                } else {

                    console.log($rootScope.usuarioLogueado.idRol);
                    var posicion = -1;
                    for (var i = 0; i < $rootScope.roles.length; i++) {
                        if ('/' + $rootScope.roles[i].page == $location.$$path) {
                            posicion = i;
                        }
                    }
                    if (posicion > -1) {
                        console.log($rootScope.roles, $rootScope.usuarioLogueado.idRol, posicion);
                        if ($rootScope.roles[posicion].roles.indexOf($rootScope.usuarioLogueado.idRol) == -1) {
                            $location.url('/');
                        }
                    }
                }

<<<<<<< HEAD
=======
          
          var posicion = -1;
          for (var i = 0; i < $rootScope.roles.length; i++) {
            if ('/' + $rootScope.roles[i].page == $location.$$path) {
              posicion = i;
            }
          }
          if (posicion > -1) {

            if ($rootScope.roles[posicion].roles.indexOf($rootScope.usuarioLogueado.idRol) == -1) {
              $location.url('/');
>>>>>>> FETCH_HEAD
            }

        });
        $rootScope.usuarioLogueado = null;


    });

    app.directive('moduleHeader', function($route) {

        return {
            restrict: 'E',
            templateUrl: 'header.html'
        };

    });

    app.directive('moduleFooter', function($route) {

        return {
            restrict: 'E',
            templateUrl: 'footer.html'
        };

    });

    app.directive('match', function() {
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                match: '='
            },
            link: function(scope, elem, attrs, ctrl) {
                scope.$watch(function() {
                    return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.match === ctrl.$modelValue;
                }, function(currentValue) {
                    ctrl.$setValidity('match', currentValue);
                });
            }
        };
    });

    app.controller('indexController', ['$scope',
        function($scope) {

        }
    ]);









})


();
