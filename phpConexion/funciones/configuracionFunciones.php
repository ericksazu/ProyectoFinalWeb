<?php
	function obtenerUsuario($conexion){
		$query = "CALL sp_ObtenerUsuarios()";
		return BDQuery($query, $conexion);
	}

	function modificarUsuario($conexion, $nuevo_nombre, $nuevo_primerApellido, $nuevo_segundoApellido, $nuevo_email, $nueva_contrasena, $nuevo_nivel, $id){
		$query = 'CALL sp_modificarUsuario("'.$nuevo_nombre.'","'.$nuevo_primerApellido.'","'.$nuevo_segundoApellido.'","'.$nuevo_email.'","'.$nueva_contrasena.'","'.$nuevo_nivel.'","'.$id.'")';
		return BDQuery($query, $conexion);
	}

	/*function eliminarUsuario($conexion,$idUsuario){
		$query = "CALL sp_EliminarUsuario("'.$idUsuario.'")";
		return BDQuery($query, $conexion);
	}

	function ingresarUsuario($conexion,  $nombre, $primerApellido, $segundoApellido, $email, $contrasena, $nivel, $rol){
		$query = "CALL sp_IngresarUsuario("'.$nombre.'","'.$primerApellido.'","'.$segundoApellido.'","'.$email.'","'.$contrasena.'","'.$nivel.'","'.$rol.'")";
		return BDQuery($query, $conexion);
	}*/

	
?>