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
	$query = 'CAll agregarTema("'.$tema.'","'.$descripcion.'","'. $fecha_creacion.'","'. $fecha_cierre.'", 1)';
	return BDQuery($query, $conexion);

	
}

function ObtenerIdForo($conexion) {
	return BDQuery("CALL obtenerIdForo()", $conexion);
}


function obtenerDatos($conexion, $id){
	
	$query = "CALL obtenerDatos($id)";
	return BDQuery($query, $conexion);
}


function obtenerComentarios($conexion, $id){
	$query = "CALL obtenerComentarioForo($id)";

	return BDQuery($query, $conexion);
}

function agregarComentarios($conexion, $id, $descripcion, $idUsuario){
	$query = "CALL agregarComentarioForo('$descripcion', $idUsuario, $id)";

	return BDQuery($query, $conexion);
}

function cerrarForo($conexion, $idForo2, $estado){

	$query = "CALL cerrarForo($idForo2, $estado)";

	return BDQuery($query, $conexion);
}

function eliminarForo($conexion,$id){
	$query = "CALL eliminarForo($id)";
	
	return BDQuery($query, $conexion);
}

function editarInfoForo($conexion,$id){
	$query = "CALL editarInfoForo($id)";
	
	return BDQuery($query, $conexion);
}

function obtenerTemaForo($conexion,$id){
	$query = "CALL obtenerTemaForo($id)";
	
	return BDQuery($query, $conexion);
}

function agregarEstudianteForo($conexion,$idForo, $email){
	$query = "CALL agregarEstudianteForo($idForo, '$email')";
	echo $query;
	return BDQuery($query, $conexion);
}

function obtenerEstudiantesForo($conexion,$idForo){
	$query = "CALL obtenerEstudiantesForo($idForo)";
	
	return BDQuery($query, $conexion);
}

function eliminarEstudianteForo($conexion,$idUsuario, $idForo){
	$query = "CALL eliminarEstudianteForo($idUsuario, $idForo)";
	
	return BDQuery($query, $conexion);
}

function agregarAsistente($conexion,$idUsuario, $idForo){
	$query = "CALL agregarAsistente($idUsuario, $idForo)";
	
	return BDQuery($query, $conexion);
}

function obtenerAsistente($conexion,$idForo){
	$query = "CALL agregarAsistente($idForo)";
	
	return BDQuery($query, $conexion);
}

function eliminarDenuncia($conexion,$idDenuncia){
	$query = "CALL eliminarDenuncia($idDenuncia)";
	
	return BDQuery($query, $conexion);
}

function eliminarComentario($conexion,$idComentario){
	$query = "CALL eliminarComentario($idComentario)";
	
	return BDQuery($query, $conexion);
}

/*function insertarVisitasForo($conexion,$visitas, $idForo){
	$query = "CALL insertarVisitasForo($visitas,$idForo)";
	
	return BDQuery($query, $conexion);
}*/

function obtenerDenuncias($conexion){
	$query = "CALL obtenerDenuncias()";
	return BDQuery($query, $conexion);
}
?>