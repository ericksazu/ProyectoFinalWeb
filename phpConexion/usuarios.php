<?php

error_reporting(-1);
ini_set('display_errors', 'On');



$host = "23.229.208.198";
$usuario = "proyectofinal";
$password = "Cenfotec2014";

define('__DATABASE__', "proyectofinalweb");


$conexion = mysqli_connect($host, $usuario, $password, __DATABASE__) or die(mysqli_error());


$resultado = mysqli_query($conexion, "SELECT * FROM Usuario");


# Collect the results
while($objeto = mysqli_fetch_object($resultado)) {
    $listaUsuarios[] = $objeto;
}



# JSON-encode the response
$json_response = json_encode($listaUsuarios);

// # Return the response
echo $json_response;
// mysqli_free_result($resultado);


mysqli_close($conexion);


?>