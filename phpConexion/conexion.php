<?php
error_reporting(2);
ini_set('display_errors', 'On');

$host = "23.229.208.198:3306";
$usuario = "proyectofinal";
$password = "Cenfotec2014";

define('__DATABASE__', "proyectofinalweb");


$conexion = mysql_pconnect($host, $usuario, $password) or die(mysql_error());




?>