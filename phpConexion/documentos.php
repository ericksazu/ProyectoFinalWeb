<?php

//Definimos las variables
$db_hostname="localhost";
$db_database="longinetbd";
$username="root";
$password="";

$db_server = db_init();

function db_init(){
	global $db_hostname,
	       $db_database,
	       $username,
	       $password;

	$db_server = mysql_connect($db_hostname,$username,$password);
    if(!$db_server)
     die('No se pudo establecer conexion con msql'.mysql_error());

    mysql_select_db($db_database)
    or die('No se pueede conectar con la base de datos'.mysql_error());

    return $db_server;
}
?>