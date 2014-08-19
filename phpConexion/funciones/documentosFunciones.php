<?php

function ObtenerDocumento($conexion){
		$query = "CALL sp_seleccionarDocumento()";
		return BDQuery($query, $conexion);
}

?>