<?php

include_once "conexion.php";
include_once "funciones/usuariosFunciones.php";



$resultado = ObtenerUsuarios($conexion);

echo mysql_num_rows($resultado);

$listaUsuarios = Array();

while ($item = mysqli_fetch_array($resultado)) {

	array_push($listaUsuarios, $item);

}


echo '<pre>';
print_r($listaUsuarios);
echo '</pre>';

echo json_encode($listaUsuarios);


?>