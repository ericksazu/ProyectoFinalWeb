angular.module('module').controller('FormCtrl', function($scope, $http, $rootScope) {

var formData = {
        firstname: "default",
        lastfirstName: "default",
        lastsecondName: "default",
        email: "default",
        nivel:"default",
        rol:"default",
        carrera:" default",
};

      
$scope.save = function() {
        formData = $scope.form;
        //console.log (formData);
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

