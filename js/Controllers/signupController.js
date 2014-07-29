angular.module('module').controller('signupController',
    function($scope, $location, $http, $rootScope) {
        $scope.submitted = false;
        $scope.signupForm = function() {

            if ($scope.signup_form.$valid) {

                var posicion = -1;
                $http.get('data/usuario.json').success(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].email == $scope.signup.email) {

                            posicion = i;
                        }
                    }
                    if (posicion > -1) {
                        $rootScope.usuarioLogueado = {
                            "nombre": data[posicion].nombre,
                            "contrasena": data[posicion].contrasena,
                            "email": data[posicion].email,
                            "img": data[posicion].img,
                            "rol": data[posicion].rol,
                            "thumbnail": data[posicion].thumbnail

                        };
                        if ($rootScope.usuarioLogueado.rol == "administrador") {
                            $location.url('/configuracion');
                        } else {
                            $location.url('/secciones');
                        }
                    } else {
                        $scope.signup_form.submitted = true;
                        $('#errorcontrasena > div').addClass('visible');
                        setTimeout(function() {
                            $('#errorcontrasena > div').removeClass('visible');
                        }, 3000);

                    }
                });


            } else {
                $scope.signup_form.submitted = true;
                $('#errorcontrasena > div').addClass('visible');
                setTimeout(function() {
                    $('#errorcontrasena > div').removeClass('visible');
                }, 3000);
            }

        }
        $scope.signupForm2 = function() {

            if ($scope.signup_form.$valid) {
                // Submit as normal
                $('#form-modal').modal('hide');
                $('#success > div').addClass('visible');
                setTimeout(function() {
                    $('#success > div').removeClass('visible');
                }, 3000);

            } else {
                $scope.signup_form.submitted = true;
                $('#errorcontrasena > div').addClass('visible');
                setTimeout(function() {
                    $('#errorcontrasena > div').removeClass('visible');
                }, 3000);
            }
        }

    });