<?php

error_reporting(-1);
ini_set('display_errors', 'On');



$host = "23.229.208.198";
$usuario = "proyectofinal";
$password = "Cenfotec2014";

define('__DATABASE__', "proyectofinalweb");


$conexion = mysqli_connect($host, $usuario, $password, __DATABASE__) or die(mysqli_error());



if ($_FILES["file"]["error"] > 0) {
  echo "Error: " . $_FILES["file"]["error"] . "<br>";
} else {
  echo "Upload: " . $_FILES["file"]["name"] . "<br>";
  echo "Type: " . $_FILES["file"]["type"] . "<br>";
  echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
  echo "Stored in: " . $_FILES["file"]["tmp_name"];
}



mysqli_close($conexion);


?>