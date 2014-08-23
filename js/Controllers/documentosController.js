angular.module('module').controller('documentosController', function($scope, $http, $rootScope) {

	$scope.documentos = [];
	$scope.documentosCalificar = [];
	$scope.carreras = [];
	$scope.cursos = [];
	$scope.nuevoDocumento = {};
	$scope.documentosPendientes = false;
	$scope.documentosNuevos = [];
	$scope.documentosCalificar.habilitado = true;


	$scope.currentPage = 0;
	$scope.pageSize = 5;

	

	$scope.numberOfPages=function(){
		return Math.ceil($scope.documentos.length/$scope.pageSize);
	}

	var timeoutHandle = window.setTimeout(function(){
		$("#message1").addClass('hide');
	});

	$(".errorArchivo").addClass('hide');


	//revisa si el archivo puede ser visualizable dependiendo de la extension
	$scope.visualizable = function(archivo) {
		console.log(archivo);

		var extension = archivo.split('.').pop();

		if (extension == 'pdf' || extension == 'jpg'|| extension == 'png' || extension == 'gif') {
			return true;
		}
		else {
			return false;
		}

	};

    //obtiene el listado de documentos
    $http.get('phpConexion/obtenerDocumentos.php').success(function (data) {
    	$scope.documentos = data;
    });

    //obtiene la lista de carreras
    $http.get('phpConexion/ObtenerCarreras.php').success(function (data) {
    	$scope.carreras = data;
    });

    //obtiene la lista de cursos por carrera
    $scope.cambiaCursos = function() {
    	console.log($scope.carrera_seleccionada);
    	$http.post('phpConexion/obtenerCursos.php', {idCarrera: $scope.nuevoDocumento.carrera}).success(function (data) {
    		$scope.cursos = data;
    	});
    };

    $scope.visible = $rootScope.usuarioLogueado.idRol == 13;

    $scope.buscar= function(){
    	alert($scope.documentosTotales[0].titulo || $scope.documentosTotales[0].tema);
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
	

	$scope.abrirCrearDocumento = function() {

		$scope.myForm.submitted = true;
		$(".errorArchivo").removeClass('visible');
		$(".errorArchivo").addClass('hide');
		document.myForm.archivo.value = "";

		$scope.nuevoDocumento = {};


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
		
		$scope.documentosCalificar.habilitado = false;
		/*$scope.documentosPendientes = false;*/
		for(var i = 0; i < $scope.documentosCalificar.length; i++) {
			
			if ($scope.documentosCalificar.habilitado == true) {
				$scope.documentosPendientes = true;
			}
		}

		console.log($scope.documentosPendientes);

	}

	//agrega el archivo a un objeto hasta que se le de guardar
	$scope.uploadFiles = function(files) {
		var fd = new FormData();
	    //Take the first selected file
	    fd.append("file", files[0]);
	    $scope.nuevoDocumento.archivo = fd;
	};

	$scope.guardarDocumento = function(){

		var descripcion = $scope.documento.descripcion,
		titulo = $scope.documento.titulo,
		tema = $scope.documento.tema;
		archivoSubido = document.myForm.archivo.value,
		documentoNuevo = new Object();		

		if (document.myForm.archivo.value == '')
		{
			$(".errorArchivo").removeClass('hide');
			$(".errorArchivo").addClass('visible');
		}


		if ($scope.myForm.$valid && document.myForm.archivo.value != '') {
			$scope.myForm.submitted = true;

			console.log($rootScope.usuarioLogueado);

			$scope.nuevoDocumento.idUsuario = $rootScope.usuarioLogueado.id;

			console.log($scope.files);
			$http.post('phpConexion/uploadFile.php', $scope.nuevoDocumento.archivo, {
				withCredentials: true,
				headers: {'Content-Type': undefined },
				transformRequest: angular.identity
			}).success(function(data){
				$http.post('phpConexion/agregarDocumento.php', {
					curso: $scope.nuevoDocumento.curso,
					autor: $rootScope.usuarioLogueado.email,
					descripcion: $scope.nuevoDocumento.descripcion,
					idUsuario: $scope.nuevoDocumento.idUsuario,
					tema: $scope.nuevoDocumento.tema,
					titulo: $scope.nuevoDocumento.titulo,
					archivo: data.name,
					size: data.size/1024
				}
				).success(function(){

					$scope.nuevoDocumento = {};

					$("#message1").removeClass('hide');
					timeoutHandle = window.setTimeout(function(){
						$("#message1").addClass('hide');
					}, 2000);

					$('#archivo').val('');

					$('#myModal').modal('hide');

					$http.get('phpConexion/obtenerDocumentos.php').success(function (data) {
						$scope.documentos = data;
					});

				}).error(function() {

				});
			}).error(function(data) {
				console.log(data);
			});




			/*console.log(documentoNuevo);*/
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

	$scope.votar = function(idDocument, qty) {

		var idUsuario = $rootScope.usuarioLogueado.id;


	};

});