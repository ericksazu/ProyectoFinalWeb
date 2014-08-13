<?php

	include_once "../conexion.php";
	include_once "../funciones/blogFunciones.php";

	$data = json_decode(file_get_contents("php://input"));

	$descripcionPublicacion = $data->descripcionPublicacion;
	$tema = $data->tema;
	$fecha = $data->fecha;


	$qry = 'INSERT INTO Blog (descripcionPublicacion,fecha,tema) values ("' . $descripcionPublicacion . '","' . $fecha .'","' . $tema .'")';

	Print "Your information has been successfully added to the database.";

	$qry_res = mysqli_query($conexion,$qry);

	//var_dump($qry_res);

	mysqli_close($conexion);



	//$resultado = CrearNuevoBlog($conexion);
	//var_dump($data);


?>