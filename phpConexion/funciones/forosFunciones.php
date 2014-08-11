<?php

function ObtenerForos($conexion) {

	$query = "select * from Foro";
	mysql_select_db("loginNetBD", $conexion) or die('error'.mysql_error());
	return mysql_query($query, $conexion);

}
?>