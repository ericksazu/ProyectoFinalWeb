<?php
	function obtenerUsuario($conexion)
	{
		$query = "CALL sp_ObtenerUsuarios()";
		return BDQuery($query, $conexion);
	}


	function eliminarUsuario($conexion,$idUsuario)
	{
		$query = "CALL sp_EliminarUsuario("'.$idUsuario.'")";
		return BDQuery($query, $conexion);
	}

	function ingresarUsuario($conexion,  $nombre, $primerApellido, $segundoApellido, $email, $contrasena, $nivel, $rol)
	{
		$query = "CALL sp_IngresarUsuario("'.$nombre.'","'.$primerApellido.'","'.$segundoApellido.'","'.$email.'","'.$contrasena.'","'.$nivel.'","'.$rol.'")";
		return BDQuery($query, $conexion);
	}

	function modificarUsuario($conexion, $nombre, $primerapellido, $segundoApellido, $email, $contrasena, $nivel, $rol,$idUsuario)
	{
		$query = "CALL sp_modificarUsuario("'.$nombre.'","'.$primerApellido.'","'.$segundoApellido.'","'.$email.'","'.$contrasena.'","'.$nivel.'","'.$rol.'","'.$idUsuario.'")";
		return BDQuery($query, $conexion);
	}
?>