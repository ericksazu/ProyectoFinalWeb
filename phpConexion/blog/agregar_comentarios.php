<?php

	include_once "../conexion.php";
	include_once "../funciones/blogFunciones.php";

	$data = json_decode(file_get_contents("php://input"));

	$descripcion = $data->descripcion;
	$Blog_idBlog = $data->Blog_idBlog;

	$resultado = AgregarComentariosBlog($conexion,$descripcion,$Blog_idBlog);

	mysqli_close($conexion);



	//$resultado = CrearNuevoBlog($conexion);
	//var_dump($data);


?>