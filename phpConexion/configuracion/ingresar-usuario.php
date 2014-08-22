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
    $Blog_idBlog = $data->Blog_idBlog;
    $idRol = $data->idRol;


    
    
    $resultado = CrearNuevoUsuario($conexion, $nombre, $primerApellido, $segundoApellido, $email, $contrasena, $nivelUniversitario, $Blog_idBlog, $idRol);
  

    mysqli_close($conexion);   
?>