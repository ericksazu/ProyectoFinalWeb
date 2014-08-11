<?php

include_once "conexion.php";

// include_once "funciones/usuariosFunciones.php";


$resultado = mysqli_query($conexion, "SELECT * FROM Usuario");


# Collect the results
while($objeto = mysqli_fetch_object($resultado)) {
    $listaUsuarios[] = $objeto;
}

// echo '<pre>';
// print_r($listaUsuarios);
// echo '</pre>';


# JSON-encode the response
$json_response = json_encode($listaUsuarios);

// # Return the response
echo $json_response;
// mysqli_free_result($resultado);


mysqli_close($conexion);



?>