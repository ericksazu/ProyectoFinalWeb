<?php

	include_once "../conexion.php";
	include_once "../funciones/usuariosFunciones.php";

	$resultado = ObtenerUsuarios($conexion);

	$lista = Array();

	while ($item = mysqli_fetch_array($resultado)) {
		array_push($lista, $item);
	}

	echo json_encode($lista);

	mysqli_close($conexion);



?>