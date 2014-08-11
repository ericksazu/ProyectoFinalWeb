<?php
error_reporting(-1);
ini_set('display_errors', 'On');

include_once "funciones.php";


$conexion = mysql_pconnect($host, $usuario, $password) or die(mysql_error());

$host = "23.229.208.198";
$usuario = "proyectofinal";
$password = "Cenfotec2014";

define('__DATABASE__', "proyectofinalweb");


$conexion = mysqli_connect($host, $usuario, $password, __DATABASE__) or die(mysqli_error());

?>