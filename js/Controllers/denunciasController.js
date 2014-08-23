angular.module('module').controller('denunciasController', function($scope, $http, $rootScope, $route) {

	 $scope.denuncias = [];

            $http.post('phpConexion/obtenerDenuncias.php').success(function(data, status) {
                console.log("inserted good", data);
                $scope.denuncias = data;
            }).error(function(data, status) {
                console.log("inserted bad");
            });

            console.log($scope.denuncias);

});