<?php

	function ObtenerEntradasBlog($conexion){
		$query = "CALL sp_ObtenerBlogs()";
		return BDQuery($query, $conexion);
	}

	function CrearNuevoBlog($conexion,$contenido_blog,$fecha_blog,$autor_blog,$tema_blog){
		$query = 'CALL sp_IngresarNuevoBlog("'.$contenido_blog.'","'. $fecha_blog .'","'.$autor_blog.'","'.$tema_blog.'")';
		return BDQuery($query, $conexion);
	}

	function EditarEntradaBlog($conexion,$blog_descripcion,$blog_tema,$blog_id){
		$query = 'CALL sp_editarEntradaBlog("'.$blog_descripcion.'","'. $blog_tema .'","'.$blog_id.'")';
		return BDQuery($query, $conexion);
	}

	function AgregarComentariosBlog($conexion,$descripcion_comentario,$idBlog_comentario){
		$query = 'CALL sp_IngresarComentarioBlog("'.$descripcion_comentario.'","'. $idBlog_comentario .'")';
		return BDQuery($query, $conexion);
	}

	function ObtenerComentariosBlog($conexion){
		$query = 'CALL sp_ObtenerComentariosBlog()';
		return BDQuery($query, $conexion);
	}

?>