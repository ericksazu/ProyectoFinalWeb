angular.module('module').controller('documentosController', function($scope, $http, $rootScope) {

	$scope.documentos = [];
	$scope.documentosCalificar = [];
	$scope.carreras = [];
	$scope.cursos = [];
	var timeoutHandle = window.setTimeout(function(){
		$("#message1").addClass('hide');
	});

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
	
	

	$http.get('data/cursos_web.json').success(function (data) {
		$scope.cursos= data;
	});


	$scope.buscar= function(){
		alert($scope.documentos[0].titulo);
	};

	$scope.marca = function(index, votos) {
		//console.log(index, votos);
		if (index <= votos) {
			return "glyphicon glyphicon-star yellow"
		}
		else {
			return "glyphicon glyphicon-star stars";
		}
	};

	$scope.cambia = function() {
		console.log($scope.carrera_seleccionada);
		console.log($scope.curso_seleccionado);

		if($scope.carrera_seleccionada == 'DW'){
			$http.get('data/cursos_web.json').success(function (data) {
				$scope.cursos= data;
			});
		}

		if($scope.carrera_seleccionada == 'IG'){
			$http.get('data/cursos_ig.json').success(function (data) {
				$scope.cursos= data;
			});
		}

		if($scope.carrera_seleccionada == 'ING'){
			$http.get('data/cursos_ing.json').success(function (data) {
				$scope.cursos= data;
			});
		}

	};

	$scope.visualizarDoc = function(index,event){

		window.open($scope.documentos[index].documento)
		event.preventDefault();
	};

	$scope.abrirCrearDocumento = function() {

		$scope.myForm.submitted = true;

		$scope.documento = {
			titulo : '',
			tema : '',
			descripcion : '',
			fecha : null,
			autor : '',
			votos : 0,
			peso : ''
		};


	};

	$scope.guardarDocumento = function(){

		var descripcion = $scope.documento.descripcion,
		titulo = $scope.documento.titulo,
		tema = $scope.documento.tema,
		documentoNuevo = new Object(),
		fechaDocumento = new Date();

		if ($scope.myForm.$valid) {
			
			$scope.myForm.submitted = true;
			documentoNuevo.titulo = titulo;
			documentoNuevo.tema = tema;
			documentoNuevo.descripcion = descripcion;
			documentoNuevo.fecha = fechaDocumento.getDate() + '/' + fechaDocumento.getMonth() + '/' + fechaDocumento.getFullYear();
			documentoNuevo.autor = $rootScope.usuarioLogueado.nombre;
			documentoNuevo.votos = 0;
			documentoNuevo.peso = '50KB';

			$scope.documentos.push(documentoNuevo);
			$('#myModal').modal('hide');

			window.clearTimeout(timeoutHandle);

			$("#message1").removeClass('hide');
			timeoutHandle = window.setTimeout(function(){
				$("#message1").addClass('hide');
			}, 2000);

			$scope.documento.tema = "";
			$scope.documento.titulo = "";
			$scope.documento.descripcion ="";

			console.log(documentoNuevo);
			$scope.myForm.submitted = true;
		}
		else {
			$(".error").css({'color':'red'});
			$scope.myForm.submitted = false;
			
		}
		return;
		

		



		alert('exito');


	};

	$scope.ver = 1;



});