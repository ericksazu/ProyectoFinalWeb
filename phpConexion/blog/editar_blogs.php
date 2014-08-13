<?php

	include_once "../conexion.php";
	include_once "../funciones/blogFunciones.php";

	$data = json_decode(file_get_contents("php://input"));

	$descripcionPublicacion = $data->descripcionPublicacion;
	$tema = $data->tema;
	$idBlog = $data->idBlog;

	$resultado = EditarEntradaBlog($conexion,$descripcionPublicacion,$tema,$idBlog);

	mysqli_close($conexion);



	//$resultado = CrearNuevoBlog($conexion);
	//var_dump($data);


?>