<?php

function ObtenerForos($conexion) {

	$query = "call sp_ObtenerForos()";
	return BDQuery($query, $conexion);
}

function InsertarForo($datos, $conexion) {

	$query = "insert into Foro (
				tema,
				descripcion,
				visitas,
				asistente,
				Curso_idCurso,
				usuarioCreado
			)
			values (
				".$datos['tema'].",
				".$datos['descripcion'].",
				".$datos['visitas'].",
				".$datos['asistente'].",
				".$datos['curso_idCurso'].",
				".$datos['usuarioCreado']."
				)";

	return BDQuery($query, $conexion);
}

function ObtenerTemas($conexion){
	$query = "call sp_ObtenerTemasForo();";
	return BDQuery($query, $conexion);
}


/*function AgregarTemas($conexion, @idForo){
	$query = "call sp_agregarTemaForo(@idForo);";
	return BDQuery($query, $conexion);
}*/


?>