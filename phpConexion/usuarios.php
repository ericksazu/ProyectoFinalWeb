<?php

include_once "conexion.php";
include_once "funciones.php";



$resultado = ObtenerUsuarios($conexion);



$listaUsuarios = Array();

while ($item = mysql_fetch_array($resultado)) {
	
	array_push($listaUsuarios, $item);
}


echo json_encode($listaUsuarios);


?>