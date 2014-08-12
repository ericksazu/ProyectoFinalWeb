<?php

	include_once "../conexion.php";
	include_once "../funciones/blogFunciones.php";

	$resultado = ObtenerEntradasBlog($conexion);

	$lista = Array();

	while ($item = mysqli_fetch_array($resultado)) {
		array_push($lista, $item);
	}

	echo json_encode($lista);

?>