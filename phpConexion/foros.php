<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";


//die('usuario: '.$_GET['user_id']);


$resultado = ObtenerForos($conexion);



$lista = Array();

while ($item = mysqli_fetch_array($resultado)) {
	$item['show'] = true;
	array_push($lista, $item);

}


echo json_encode($lista);


?>