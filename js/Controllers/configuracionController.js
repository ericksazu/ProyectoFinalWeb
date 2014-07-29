angular.module('module').controller('configuracionController', function($scope, $http, $rootScope) {

	$(document).ready(function(){

		var expr = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;  


		$("#agregar").click(function(){
			var nombre = $("#nombre").val();
			var apellido = $("#apellido").val();
			var email = $("#email").val();
			var curso = $("#curso1").val();
			var carrera1 = $("#carrera1").val();
			var curso1 = $("#curso1").val();
			var rol = $("#rol").val();
			var nivel = $("#nivel").val();
			var carrera2 = $("#carrera2").val();
			var curso2  = $("#curso2").val(); 



			var usuarios = {nombre: nombre, apellido:apellido,Correo:email,carrera1:carrera1,curso1:curso1,rol:rol,nivel:nivel,carrera2:carrera2,curso2:curso2};

			if(nombre ==""){
				alert("Ingresar Nombre")
				return false;
			}else{
				if(apellido == ""){
					alert("Ingresar Apellidos")
					return false;
				}else{
					if( email ==""|| !expr.test(email)){
						alert("Ingresar Correo")
						return false;
					}else{
						if(curso1 == ""){
							alert("Ingresar curso")
							return false;

						}else{
							if(curso2 == ""){
								alert("Ingresar curso")
								return false;

							}

						}
					}
				}			
			}
			var json_str = JSON.stringify(usuarios);
			console.log(json_str)
			alert("Usuario Agregado");
			return true
		});


});


$("#editarCarrera").click(function(){
	var carreraopcional = $("#carreraopcional").val(); 
	var editarCarrera = $("#editarCarrera").val();
	
	if(editarCarrera === "Eliminar"){
		alert("Carrera Eliminada");
		$("#carreraopcional").val("");
		$("#editarCarrera").val("opcion");
	}else{
		if(editarCarrera == "Agregar"){
			alert("Carrera Agregada");
			$("#carreraopcional").val("");
			$("#editarCarrera").val("opcion");
		}else{
			if(editarCarrera == "Editar"){
				alert("esta seguro que desea modificar esta carrera");
				$("#carreraopcional").val("");
				$("#editarCarrera").val("opcion");
			}
		}
	}
});







});