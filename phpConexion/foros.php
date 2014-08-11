<?php

include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$resultado = ObtenerForos($conexion);



$lista = Array();

while ($item = mysql_fetch_array($resultado)) {

	array_push($lista, $item);
}

print_r($lista);
print_r(json_encode($lista[0]));


?>