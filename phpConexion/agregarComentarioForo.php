<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$descripcion = $data->descripcion;
$idUsuario = $data->idUsuario;


$resultado = agregarComentarios($conexion, $id, $descripcion, $idUsuario);




mysqli_close($conexion);

// $lista = Array();

// while ($item = mysqli_fetch_array($resultado)) {
// 	//$item['show'] = true;
// 	array_push($lista, $item);

// }


// echo json_encode($lista);


?>