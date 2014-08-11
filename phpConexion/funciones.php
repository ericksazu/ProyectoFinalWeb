<?php

function ObtenerUsuarios($conexion) {

	$query = "select * from Usuario";
	mysql_select_db("loginNetBD", $conexion) or die('error'.mysql_error());
	return mysql_query($query, $conexion);

}
?>