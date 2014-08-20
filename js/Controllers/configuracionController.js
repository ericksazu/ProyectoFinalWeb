angular.module('module').controller('FormCtrl', function($scope, $http, $rootScope) {

  $scope.listaUsuarios = [];

  $http.get('phpConexion/login/usuarios.php').success(function(data) {
    $scope.usuarios = data;

    for (var i = 0; i < $scope.usuarios.length; i++) {
      $scope.listaUsuarios.push($scope.usuarios[i]);
    };

  });


  $scope.guardarDatosUsuario = function(index) {
    $scope.nuevoNombre = $scope.listaUsuarios[index].nombre;
    $scope.nuevoPrimerApellido = $scope.listaUsuarios[index].primerApellido;
    $scope.nuevoSegundoApellido = $scope.listaUsuarios[index].segundoApellido;
    $scope.nuevoCorreo = $scope.listaUsuarios[index].email;
    $scope.nuevaContrasena = $scope.listaUsuarios[index].contrasena;
    $scope.nuevoRol = $scope.listaUsuarios[index].nivelUniversitario;
    $scope.idUsuario = $scope.listaUsuarios[index].idUsuario;

    $http.post('phpConexion/configuracion/modificar-usuario.php', {'nombre': $scope.nuevoNombre, 'primerApellido': $scope.nuevoPrimerApellido, 'segundoApellido': $scope.nuevoSegundoApellido, 'email': $scope.nuevoCorreo, 'contrasena': $scope.nuevaContrasena, 'nivelUniversitario': $scope.nuevoRol, 'idUsuario': $scope.idUsuario}).success(function(data, status) {
      console.log("inserted good");
      $scope.algo = data;
    }).error(function(data, status) {
        console.log("inserted wrong");
    });

  };


  $('#confirm-delete').on('show.bs.modal', function(e) {
    $(this).find('.danger').attr('href', $(e.relatedTarget).data('href'));
    $('.debug-url').html('Delete URL: <strong>' + $(this).find('.danger').attr('href') + '</strong>');
  });


  $scope.submitIngresar = function(form) {

    if ($scope.form.rol == 'Estudiante') {
      $scope.form.rol = 12;
    } else if ($scope.form.rol == 'Profesor') {
      $scope.form.rol = 13;
    } else if ($scope.form.rol == 'Rector') {
      $scope.form.rol = 15;
    } else if ($scope.form.rol == 'Director de Carrera') {
      $scope.form.rol = 16;
    };

    $scope.url = 'php/ingresar-usuario.php';

    $http.post($scope.url, {"data":$scope.form}).success(function(data,status) {
      $scope.status = status;
      $scope.data = data;
      $scope.result = data;
    }).error(function(data,status) {
      $scope.data = data || "Request Failed"
      $scope.status = status;
    }); 
  };

  $scope.submitEliminar = function() {

    $scope.url = 'php/ingresar-usuario.php';

    $http.post($scope.url, {"data":$scope}).success(function(data,status) {
      $scope.status = status;
      $scope.data = data;
      $scope.result = data;
    }).error(function(data,status) {
      $scope.data = data || "Request Failed"
      $scope.status = status;
    }); 
  };

  $scope.submitIngresar = function() {

    $scope.url = 'php/modificar-usuario.php';

    $http.post($scope.url, {"data":$scope.form}).success(function(data,status) {
      $scope.status = status;
      $scope.data = data;
      $scope.result = data;
    }).error(function(data,status) {
      $scope.data = data || "Request Failed"
      $scope.status = status;
    }); 
  };

});

