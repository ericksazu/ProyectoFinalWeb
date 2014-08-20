<?php
error_reporting(-1);
ini_set('display_errors', 'On');

include_once "funciones.php";


$host = "23.229.208.198";
$usuario = "proyectofinal";
$password = "Loginnet2014";

define('__DATABASE__', "proyectofinalweb");


$conexion = mysqli_connect($host, $usuario, $password, __DATABASE__) or die(mysqli_error());


?>