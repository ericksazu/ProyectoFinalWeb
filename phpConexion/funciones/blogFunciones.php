<?php

	function ObtenerEntradasBlog($conexion){
		$query = "call sp_ObtenerBlogs()";
		return BDQuery($query, $conexion);
	}

	function CrearNuevoBlog($conexion){
		$query = "call sp_IngresarNuevoBlog()";
		return BDQuery($query, $conexion);
	}

?>