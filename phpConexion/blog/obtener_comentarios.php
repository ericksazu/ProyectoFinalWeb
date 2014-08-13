<?php

	include_once "../conexion.php";
	include_once "../funciones/blogFunciones.php";

	$data = json_decode(file_get_contents("php://input"));

	$idBlog = $data->Blog_idBlog;

	$resultado = ObtenerComentariosBlog($conexion,$idBlog);

	$lista = Array();

	while ($item = mysqli_fetch_array($resultado)) {
		array_push($lista, $item);
	}

	echo json_encode($lista);

	mysqli_close($conexion);


?>