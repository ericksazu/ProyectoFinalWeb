<?php
    include_once "../conexion.php";
    include_once "../funciones/configuracionFunciones.php";


    $data = json_decode(file_get_contents("php://input"));

    $resultado = obtenerUsuario($conexion);
  

    mysqli_close($conexion);   
?>