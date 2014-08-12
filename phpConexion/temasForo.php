<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";


die('id_tema: '.$_GET['@idForo']);

$resultado = ObtenerTemas($conexion, "@idForo");




$lista = Array();

while ($item = mysqli_fetch_array($resultado)) {
	//$item['show'] = true;
	array_push($lista, $item);

}


echo json_encode($lista);


?>