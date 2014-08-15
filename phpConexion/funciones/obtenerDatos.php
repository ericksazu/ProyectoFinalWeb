<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));
$id = 

$resultado = obtenerDatos($conexion,$id);


mysqli_close($conexion);

?>