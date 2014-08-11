angular.module('module').controller('signupController',
  function($scope, $location, $http, $rootScope) {
    $scope.submitted = false;

    $scope.signupForm = function() {

      if ($scope.signup_form.$valid) {

<<<<<<< HEAD
        var posicion = -1, test = "";
        $http.get('./phpConexion/usuarios.php').success(function(data) {
=======
        var posicion = -1;
        $http({
          method: 'POST',
          url: './phpConexion/usuarios.php',
          dataType: 'json',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: "email=" + $scope.signup.email + "&pass=" + $scope.signup.contrasena
        }).success(function(data) {

>>>>>>> FETCH_HEAD
          for (var i = 0; i < data.length; i++) {
            if (data[i].email == $scope.signup.email && data[i].contrasena == $scope.signup.contrasena) {

              posicion = i;
            }
          }

          if (posicion > -1) {

            switch(data[posicion].idRol) {
                case "12":
                    test = 'Estudiante'
                    break;
                case "13":
                    test = 'Profesor'
                    break;
                case "14":
                    test = 'Administrador'
                    break;
            }

            $rootScope.usuarioLogueado = {
              "nombre": data[posicion].nombre,
              "primerApellido": data[posicion].primerApellido,
              "contrasena": data[posicion].contrasena,
              "email": data[posicion].email,
              "foto": data[posicion].foto,
              "idRol": test,

            };
            if ($rootScope.usuarioLogueado.idRol == "administrador") {
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

    $scope.cambiarcontrasena = function() {

      if ($scope.cambiocontrasena.$valid) {

        setTimeout(function() {
          $('#cambiarcontrasena').modal('hide');
        }, 3000);

        $('#success2 > div').addClass('visible');
        setTimeout(function() {
          $('#success2 > div').removeClass('visible');
        }, 3000);

      } else {

        $scope.cambiarcontrasena.submitted = true;
        $('#errorcontrasena2 > div').addClass('visible');
        setTimeout(function() {
          $('#errorcontrasena2 > div').removeClass('visible');
        }, 3000);

      }
    }

    /*$scope.funcionesperar = function() {

      window.setTimeout(function() {
        $('#cambiarcontrasena').modal('hide');
      }, 3000);
    };*/
  });