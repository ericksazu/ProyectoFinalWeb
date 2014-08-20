<?php

	include_once "../conexion.php";
	include_once "../funciones/usuariosFunciones.php";


	$id = $_GET['userId'];
	$resultado = obtener1Usuario($conexion, $id);

	echo json_encode($resultado->fetch_object());

	mysqli_close($conexion);


?>