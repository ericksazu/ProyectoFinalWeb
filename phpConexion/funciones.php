<?php

	function ObtenerUsuarios($conexion) {

		$query = "select * from Usuario";

		mysql_select_db(__DATABASE__, $conexion) or die('error'.mysql_error());

		return mysql_query($query, $conexion);

	}

	function ObtenerEntradasBlog(conexion){
		$query = "select * from Blog";

		mysql_select_db(__DATABASE__, $conexion) or die('error'.mysql_error());

		return mysql_query($query, $conexion);
	}







?>