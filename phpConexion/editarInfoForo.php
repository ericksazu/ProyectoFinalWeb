<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));
$id= $data->id;



$resultado = editarInfoForo($conexion, $id);


$foro = null;

while ($item = mysqli_fetch_array($resultado)) {
	//$item['show'] = true;
	$foro = $item;

}


echo json_encode($foro);

mysqli_close($conexion);

?>