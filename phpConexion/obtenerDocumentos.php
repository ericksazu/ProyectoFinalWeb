<?php

include_once "conexion.php";
include_once "funciones/documentosFunciones.php";

$resultado = ObtenerDocumentos($conexion);

$lista = Array();

while ($item = mysqli_fetch_array($resultado)) {
	
	array_push($lista, $item);

}

mysqli_close($conexion);

echo json_encode($lista);

?>