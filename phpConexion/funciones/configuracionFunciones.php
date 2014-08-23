<?php
	function obtenerUsuario($conexion){
		$query = "CALL sp_ObtenerUsuarios()";
		return BDQuery($query, $conexion);
	}

	function modificarUsuario($conexion, $nuevo_nombre, $nuevo_primerApellido, $nuevo_segundoApellido, $nuevo_email, $nueva_contrasena, $nuevo_nivel, $id){
		$query = 'CALL sp_modificarUsuario("'.$nuevo_nombre.'","'.$nuevo_primerApellido.'","'.$nuevo_segundoApellido.'","'.$nuevo_email.'","'.$nueva_contrasena.'","'.$nuevo_nivel.'","'.$id.'")';
		return BDQuery($query, $conexion);
	}

	function CrearNuevoUsuario($conexion, $insertNombre, $insertPrimerApellido, $insertSegundoApellido, $insertEmail, $insertContrasena, $insertNivelUniversitario, $insertBlogIdBlog, $insertIdRol){
		$query = 'CALL sp_IngresarNuevoUsuario("'.$insertNombre.'","'.$insertPrimerApellido.'","'.$insertSegundoApellido.'","'.$insertEmail.'","'.$insertContrasena.'","'.$insertNivelUniversitario.'","'.$insertBlogIdBlog.'","'.$insertIdRol.'")';
		return BDQuery($query, $conexion);
	}

	function eliminarUsuario($conexion, $idUsuario){
		$query = 'CALL sp_EliminarUsuario("'.$idUsuario.'")';
		return BDQuery($query, $conexion);
	}

?>