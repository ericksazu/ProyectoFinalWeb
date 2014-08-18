<?php
include_once "../conexion.php";


$consulta = "SELECT * from Documento";

if ($resultado = mysqli_query($conexion, $consulta)) {

   
    while ($obj = mysqli_fetch_object($resultado)) {
        printf ($obj->titulo, $obj->tema,$obj->descripcion);
    }
    mysqli_free_result($resultado);
}



	mysqli_close($conexion);
?>