angular.module('module').controller('denunciasController', function($scope, $http, $rootScope, $route) {

	$scope.denuncias = [];

	$http.post('phpConexion/obtenerDenuncias.php').success(function(data, status) {
		console.log("inserted good", data);
		$scope.denuncias = data;
	}).error(function(data, status) {
		console.log("inserted bad");
	});

	

	$scope.eliminarDenuncia = function(index){

		var id = $scope.denuncias[index].idDenunciaComentario;

		$http.post('phpConexion/eliminarDenuncia.php', {'idDenuncia': id}).success(function(data, status) {
			console.log("inserted good", data);
			$http.post('phpConexion/obtenerDenuncias.php').success(function(data, status) {
				console.log("inserted good", data);
				$scope.denuncias = data;
			}).error(function(data, status) {
				console.log("inserted bad");
			});
			$scope.denuncias = data;
		}).error(function(data, status) {
			console.log("inserted bad");
		});

	};


	$scope.eliminarComentario = function(index){
		var id = $scope.denuncias[index].idDenunciaComentario;
		var idComentario= $scope.denuncias[index].idComentario;
		console.log($scope.denuncias[index].idComentario + 'este es el id');

		$http.post('phpConexion/eliminarDenuncia.php', {'idDenuncia': id}).success(function(data, status) {
			console.log("inserted good", data);
			$http.post('phpConexion/obtenerDenuncias.php').success(function(data, status) {
				console.log("inserted good", data);
				$scope.denuncias = data;
			}).error(function(data, status) {
				console.log("inserted bad");
			});
			$scope.denuncias = data;
		}).error(function(data, status) {
			console.log("inserted bad");
		});

		$http.post('phpConexion/eliminarComentario.php', {'idDenuncia': id, 'idComentario': idComentario}).success(function(data, status) {
			console.log("inserted good", data);
			$http.post('phpConexion/obtenerDenuncias.php').success(function(data, status) {
				console.log("inserted good", data);
				$scope.denuncias = data;
			}).error(function(data, status) {
				console.log("inserted bad");
			});
			$scope.denuncias = data;
		}).error(function(data, status) {
			console.log("inserted bad");
		});


	};


});