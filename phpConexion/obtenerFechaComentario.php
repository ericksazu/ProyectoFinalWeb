<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";


$data = json_decode(file_get_contents("php://input"));


$resultado = obtenerFechaComentario($conexion,$data->idForo);

$lista = Array();

while ($item = mysqli_fetch_array($resultado)) {
	
	array_push($lista, $item);

}

mysqli_close($conexion);

echo json_encode($lista);

?>