angular.module('module').controller('documentosController', function($scope, $http, $rootScope) {

	$scope.documentos = [];
	$scope.documentosCalificar = [];
	$scope.carreras = [];
	$scope.cursos = [];
	$scope.documentosPendientes = false;
	$scope.documentosNuevos = [];

	$scope.currentPage = 0;
	$scope.pageSize = 5;

	$scope.numberOfPages=function(){
		return Math.ceil($scope.documentos.length/$scope.pageSize);
	}

	var timeoutHandle = window.setTimeout(function(){
		$("#message1").addClass('hide');
	});

	$(".errorArchivo").addClass('hide');

    /*aqui llamo subir archivos*/
	/*$http.get('data/documentos.json').success(function(data) {
    $scope.documentos = data;
});*/
    $http.get('phpConexion/documentos/mostrar.php').success(function (data) {
		$scope.documentosTotales = data;
	      console.log(data);

    });
	
	$http.get('data/documentosCalificar.json').success(function (data) {
		$scope.documentosCalificar = data;
		for(var i = 0; i < $scope.documentosCalificar.length; i++) {
			
			if ($scope.documentosCalificar[i].habilitado == true) {
				$scope.documentosPendientes = true;
			}
		}
	});

	$http.get('data/carreras.json').success(function (data) {
		$scope.carreras = data;
	});

	$scope.visible = $rootScope.usuarioLogueado.idRol == 13;
	
	

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
		$(".errorArchivo").removeClass('visible');
		$(".errorArchivo").addClass('hide');
		document.myForm.archivo.value = "";

		$scope.documento = {
			titulo : '',
			tema : '',
			descripcion : '',
			fecha : null,
			autor : '',
			votos : 0,
			peso : '',
			archivo : ''
		};


	};

	$scope.ocultarError = function(){
		if (document.myForm.archivo.value == '')
		{
			$(".errorArchivo").removeClass('visible');
			$(".errorArchivo").addClass('hide');
		}else{
			$(".errorArchivo").removeClass('hide');
			$(".errorArchivo").addClass('visible');
		}
	};

	$scope.guardarPuntuacion = function(index){
		
		$scope.documentosCalificar[index].habilitado = false;
		$scope.documentosPendientes = false;
		for(var i = 0; i < $scope.documentosCalificar.length; i++) {
			
			if ($scope.documentosCalificar[i].habilitado == true) {
				$scope.documentosPendientes = true;
			}
		}

		console.log($scope.documentosPendientes);

	}

	$scope.guardarDocumento = function(){

		var descripcion = $scope.documento.descripcion,
		titulo = $scope.documento.titulo,
		tema = $scope.documento.tema,
		archivoSubido = document.myForm.archivo.value,
		documentoNuevo = new Object(),
		fechaDocumento = new Date();
		documentoNuevo.peso = '50KB';
		

		$http.post('phpConexion/documentos/subir_archivos.php',{'descripcion':$scope.documento.descripcion, 'tema': $scope.documento.tema, 'titulo':$scope.documento.titulo}).success(function (data) {
		$scope.documentos = data;
	   });

		$http.get('phpConexion/documentos/mostrar.php').success(function (data) {
		$scope.documentosTotales = data;
	      console.log(data);

    });

		if (document.myForm.archivo.value == '')
		{
			$(".errorArchivo").removeClass('hide');
			$(".errorArchivo").addClass('visible');
		}



		if ($scope.myForm.$valid && document.myForm.archivo.value != '') {
			$scope.myForm.submitted = true;
			documentoNuevo.titulo = titulo;
			documentoNuevo.tema = tema;
			documentoNuevo.descripcion = descripcion;
			documentoNuevo.fecha = fechaDocumento.getDate() + '/' + fechaDocumento.getMonth() + '/' + fechaDocumento.getFullYear();
			documentoNuevo.autor = $rootScope.usuarioLogueado.nombre;
			documentoNuevo.votos = 0;
			documentoNuevo.peso = '50KB';
			documentoNuevo.archivo = archivoSubido;

   
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
			$(".error").css({'color':'#828282'});
			$(".errorArchivo").css({'color':'#828282'});
			$scope.myForm.submitted = false;
			
		}
		return;
	
		



		alert('exito');


	};

	$scope.ver = 1;


});