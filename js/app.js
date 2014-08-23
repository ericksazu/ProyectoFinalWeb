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
        }).when("/foro-topic/:idForo/:estado", {
            controller: "ForoTopicController",
            templateUrl: "views/foro-topic.html"
        }).when("/editar", {
            controller: "",
            templateUrl: "views/Editar.html"
        }).when("/denuncias", {
            controller: "denunciasController",
            templateUrl: "views/denuncias.html"
        });
    }

    var app = angular.module('module', ['ngRoute', 'mgcrea.ngStrap', 'ui.bootstrap']).config(confApp);
    app.run(function($rootScope, $location, $http) {

        $rootScope.roles = [{
            'page': 'secciones',
            'roles': ['13', '12', '14','16']
        }, {
            'page': 'blog',
            'roles': ['13', '12','16']
        }, {
            'page': 'documentos',
            'roles': ['12', '13','16']
        }, {
            'page': 'foro',
            'roles': ['12', '13','16']
        }, {
            'page': 'configuracion',
            'roles': ['14']
        }];

        $rootScope.$on('$routeChangeStart', function(event) {
            // Retrieve the object from storage
            var usuario = JSON.parse(localStorage.getItem('usuario'));
            $rootScope.usuarioLogueado = usuario ? usuario : null;
            // call php
            if ($rootScope.usuarioLogueado) {
                $http.get('phpConexion/login/obtener1Usuario.php', {
                    params: {
                        userId: $rootScope.usuarioLogueado.id
                    }
                }).success(function(data) {
                    // console.log(data);
                    $rootScope.usuarioLogueado = data;
                });
            }
            // console.log($rootScope.usuarioLogueado);
            var $rScope = this;
            if ($location.$$path == "/") {
                $rootScope.showheader = 1;
            } else {
                $rootScope.showheader = 0;
                if ($rootScope.usuarioLogueado == null) {
                    $location.url('/');
                } else {
                    var posicion = -1;
                    for (var i = 0; i < $rootScope.roles.length; i++) {
                        if ('/' + $rootScope.roles[i].page == $location.$$path) {
                            posicion = i;
                        }
                    }
                    if (posicion > -1) {
                        if ($rootScope.roles[posicion].roles.indexOf($rootScope.usuarioLogueado.idRol) == -1) {
                            $location.url('/');
                        }
                    }
                }
            }
        });
        // $rootScope.usuarioLogueado = null;


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
