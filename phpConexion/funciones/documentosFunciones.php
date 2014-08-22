<?php

function ObtenerDocumento($conexion){
		$query = "CALL sp_seleccionarDocumento()";
		return BDQuery($query, $conexion);
}
function CalificarDocumento($conexion){
		$query = "CALL sp_documentoCalificar()";
		return BDQuery($query, $conexion);
}

?>