<?php

function ObtenerDocumento($conexion){
		$query = "CALL sp_seleccionarDocumento()";
		return BDQuery($query, $conexion);
}
function CalificarDocumento($conexion){
		$query = "CALL sp_documentoCalificar()";
		return BDQuery($query, $conexion);
}

function ObtenerDocumentos($conexion) {
	$query = "call ObtenerDocumentos()";
	return BDQuery($query, $conexion);
}

function ObtenerCarreras($conexion) {
	$query = "call ObtenerCarreras()";
	return BDQuery($query, $conexion);
}

function ObtenerCursosXCarrera($conexion, $idCarrera) {
	$query = "call obtenerCursosXCarrera($idCarrera)";
	return BDQuery($query, $conexion);
}

function InsertarDocumento($conexion, $autor, $archivo, $descripcion, $tema, $titulo, $idUsuario, $idCurso, $pesoDocumento) {
	$query = "call agregarDocumento('$autor', '$archivo','$descripcion', '$tema', '$titulo', $idUsuario, $idCurso, $pesoDocumento);";

	return BDQuery($query, $conexion);
}

function AgregarVoto($conexion, $idDocumento, $idUsuario, $cantidad) {
	$query = "call AgregarVotoDocumento($cantidad, $idUsuario, $idDocumento)";
	return BDQuery($query, $conexion);
}

?>