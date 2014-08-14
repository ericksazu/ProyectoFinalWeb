<?php

	include_once "../conexion.php";
	include_once "../funciones/usuariosFunciones.php";

	$data = json_decode(file_get_contents("php://input"));

	$contrasenaNueva = $data->contrasena;
	$email = $data->email;

	$resultado = cambiarContrasena($conexion,$contrasenaNueva,$email);

	mysqli_close($conexion);


?>