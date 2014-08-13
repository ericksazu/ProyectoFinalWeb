<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));
$tema = $data->tema;
$descripcion = $data->descripcion;
$fecha_creacion = $data->fecha_creacion;
$fecha_cierre = $data->fecha_cierre;

$resultado = AgregarTemas($conexion,$tema, $descripcion, $fecha_creacion, $fecha_cierre);


mysqli_close($conexion);

// $lista = Array();

// while ($item = mysqli_fetch_array($resultado)) {
// 	//$item['show'] = true;
// 	array_push($lista, $item);

// }


// echo json_encode($lista);


?>