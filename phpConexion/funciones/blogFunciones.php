<?php

	function ObtenerEntradasBlog($conexion){

		$query = "select * from Blog";

		return BDQuery($query, $conexion);
	}

?>