<?php

	include_once "../conexion.php";
	include_once "../funciones/blogFunciones.php";

	$data = json_decode(file_get_contents("php://input"));
	//var_dump($data);



	$descripcionPublicacion = $data->descripcionPublicacion;
	//var_dump($descripcionPublicacion);
	$tema = $data->tema;

	/*$sql = 'INSERT INTO Blog '.
       '(descripcionPublicacion,tema) '.
       'VALUES ( "guest", "XYZ")';*/
	//$qry = ("INSERT INTO Blog (descripcionPublicacion,tema) VALUES ($descripcionPublicacion, $tema)");
	$qry = 'INSERT INTO Blog (descripcionPublicacion,tema) values ("' . $descripcionPublicacion . '","' . $tema .'")';
  //$qry_res = mysqli_query($qry);

  /*$query = "insert into Blog (
				tema,
				descripcionPublicacion
			)
			values (
				".'tema'.",
				".'descripcionPublicacion'."
				)";*/

	Print "Your information has been successfully added to the database.";

	$qry_res = mysqli_query($conexion,$qry);
	var_dump($qry_res);



	//$resultado = CrearNuevoBlog($conexion);


?>