<?php
    include_once "../conexion.php";
    include_once "../funciones/configuracionFunciones.php";


    $data = json_decode(file_get_contents("php://input"));

    $nombre = $data->nombre;
    $primerApellido = $data->primerApellido;
    $segundoApellido = $data ->segundoApellido;
    $email = $data->email;
    $contrasena = $data->contrasena;
    $nivelUniversitario = $data->nivelUniversitario;
    $idUsuario = $data->idUsuario;
    
    $resultado = modificarUsuario($conexion, $nombre, $primerApellido, $segundoApellido, $email, $contrasena, $nivelUniversitario, $idUsuario);

    var_dump($resultado);


    mysqli_close($conexion);
  
  
?>