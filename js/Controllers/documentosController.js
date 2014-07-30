angular.module('module').controller('documentosController', function($scope, $http, $rootScope) {

	$scope.documentos = [];
	$scope.documentosCalificar = [];
	$scope.carreras = [];

	$http.get('data/documentos.json').success(function (data) {
		$scope.documentos = data;
	});

	$http.get('data/documentosCalificar.json').success(function (data) {
		$scope.documentosCalificar = data;
	});

	$http.get('data/carreras.json').success(function (data) {
		$scope.carreras = data;
	});

	$scope.visible = $rootScope.usuarioLogueado.rol == "profesor";

	$scope.buscar= function(){
		alert($scope.documentos[0].titulo);
	};

	$scope.marca = function(index, votos) {
		console.log(index, votos);
		if (index <= votos) {
			return "glyphicon glyphicon-star yellow"
		}
		else {
			return "glyphicon glyphicon-star stars";
		}
	};

	$scope.visualizarDoc = function(index,event){

		window.open($scope.documentos[index].documento)
		event.preventDefault();
	};

	$scope.guardarDocumento = function(){
		var descripcion = $scope.documento.descripcion,
		titulo = $scope.documento.titulo,
		tema = $scope.documento.tema,
		documentoNuevo = new Object(),
		fechaDocumento = new Date();

		documentoNuevo.titulo = titulo;
		documentoNuevo.tema = tema;
		documentoNuevo.descripcion = descripcion;
		documentoNuevo.fecha = fechaDocumento.getDate() + '/' + fechaDocumento.getMonth() + '/' + fechaDocumento.getFullYear();
		documentoNuevo.autor = $rootScope.usuarioLogueado.nombre;
		documentoNuevo.votos = 0;
		documentoNuevo.peso = '50KB';

		$scope.documentos.push(documentoNuevo);

		console.log(documentoNuevo);


		$scope.documento.titulo = " ";
		$scope.documento.descripcion = " ";
		$scope.documento.tema = " ";
	};

	$scope.ver = 1;



});