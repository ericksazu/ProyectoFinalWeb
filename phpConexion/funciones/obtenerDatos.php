<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));
$tema = $data->tema;
$descripcion = $data->descripcion;
$fecha_creacion = $data->fecha_creacion;
$fecha_cierre = $data->fecha_cierre;

$resultado = obtenerDatos($conexion,$id);


mysqli_close($conexion);

?>