<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));
$idForo2 = $data->idForo2;
$estado = $data->estado;



$resultado = cerrarForo($conexion, $idForo2, $estado);


mysqli_close($conexion);

// $lista = Array();

// while ($item = mysqli_fetch_array($resultado)) {
// 	//$item['show'] = true;
// 	array_push($lista, $item);

// }


// echo json_encode($lista);


?>