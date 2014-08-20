<?php

function ObtenerUsuarios($conexion){
		$query = "CALL sp_ObtenerUsuarios()";
		return BDQuery($query, $conexion);
	}

function cambiarContrasena($conexion, $contrasenaUsuario, $correoUsuario){
		$query = 'CALL sp_cambiarContrasena("'.$contrasenaUsuario.'","'.$correoUsuario.'")';
		return BDQuery($query, $conexion);
	}	

function obtener1Usuario($conexion, $usuarioID){
		$query = 'CALL sp_obtener1Usuario("'.$usuarioID.'")';
		return BDQuery($query, $conexion);
	}	

?>