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

function ObtenerTemas($conexion, $idForo){

	$query = "select * from ComentarioxTema
	where foro_idForo = $idForo";
	return BDQuery($query, $conexion);
}


function AgregarTemas($conexion, $tema, $descripcion, $fecha_creacion, $fecha_cierre){
	$query = 'CAll sp_agregarTema("'.$tema.'","'.$descripcion.'","'. $fecha_creacion.'","'. $fecha_cierre.'")';
	return BDQuery($query, $conexion);
}




?>