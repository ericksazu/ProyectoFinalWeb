<?php
error_reporting(-1);
ini_set('display_errors', 'On');

$host = "127.0.0.1:8889";
$usuario = "root";
$password = "root";

$conexion = mysql_pconnect($host, $usuario, $password) or die(mysql_error());




?>