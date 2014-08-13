<?php

function BDQuery($query, $conexion) {
	mysqli_set_charset($conexion, 'utf8');
	//mysql_select_db(__DATABASE__, $conexion) or die('error'.mysql_error());
	return mysqli_query($conexion, $query);
}


?>