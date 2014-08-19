<?php
    include_once "../conexion.php";
    include_once "../funciones/configuracionFunciones.php";


    $data = json_decode(file_get_contents("php://input"));

    $idUsuario = $data->id;
    

    $resultado = eliminarUsuario($conexion,$idUsuario);
  

    mysqli_close($conexion);   
?>