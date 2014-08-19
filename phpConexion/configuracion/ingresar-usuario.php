<?php
    include_once "../conexion.php";
    include_once "../funciones/configuracionFunciones.php";


    $data = json_decode(file_get_contents("php://input"));

    $nombre = $data->firstname;
    $primerApellido = $data->lastfirstname
    $segundoApellido = $data ->lastsecondname;
    $email = $data->email;
    $contrasena = $data->contrasena;
    $nivel = $data->nivel;
    $rol = $data ->rol;

    $resultado = ingresarUsuario($conexion, $nombre, $primerapellido, $segundoApellido, $email, $contrasena, $nivel, $rol)
  

    mysqli_close($conexion);   
?>