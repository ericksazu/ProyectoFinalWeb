<?php

	function ObtenerEntradasBlog($conexion){
		$query = "CALL sp_ObtenerBlogs()";
		return BDQuery($query, $conexion);
	}

	function CrearNuevoBlog($conexion,$contenido_blog,$fecha_blog,$autor_blog,$tema_blog){
		//$query = "call sp_IngresarNuevoBlog($contenido_blog,$fecha_blog,$autor_blog,$tema_blog)";
		$query = 'CALL sp_IngresarNuevoBlog("'.$contenido_blog.'","'. $fecha_blog .'","'.$autor_blog.'","'.$tema_blog.'")';
		return BDQuery($query, $conexion);
	}

?>