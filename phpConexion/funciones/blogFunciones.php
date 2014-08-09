<?php

	function ObtenerEntradasBlog(conexion){

		$query = "select * from Blog";

		mysql_select_db(__DATABASE__, $conexion) or die('error'.mysql_error());

		return mysql_query($query, $conexion);
	}

?>