<?php

include_once "conexion.php";
<<<<<<< HEAD
=======
include_once "funciones.php";
>>>>>>> FETCH_HEAD

// include_once "funciones/usuariosFunciones.php";


$resultado = mysqli_query($conexion, "SELECT * FROM Usuario");

<<<<<<< HEAD
=======
//echo mysql_num_rows($resultado);
>>>>>>> FETCH_HEAD

# Collect the results
while($objeto = mysqli_fetch_object($resultado)) {
    $listaUsuarios[] = $objeto;
}

<<<<<<< HEAD
// echo '<pre>';
// print_r($listaUsuarios);
// echo '</pre>';
=======
while ($item = mysql_fetch_array($resultado)) {
>>>>>>> FETCH_HEAD


# JSON-encode the response
$json_response = json_encode($listaUsuarios);

// # Return the response
echo $json_response;
// mysqli_free_result($resultado);


mysqli_close($conexion);



?>