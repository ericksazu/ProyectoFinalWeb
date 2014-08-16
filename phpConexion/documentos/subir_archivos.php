<?php

	include_once "../conexion.php";





	$data = json_decode(file_get_contents("php://input"));

	$tema = $data->tema;
	$titulo = $data->titulo;
	$descripcion = $data->descripcion;
	$dato_peso=$_FILES['archivo']['size'];
    
    /* no me jala la informacion de estas variables para hacer los insert*/
    /* no se como jalar las FK de otras tablas lo habia hecho de esta forma pero no me sitvio*/



/* $query = $data->select("SELECT idUsuario FROM Usuario INNER JOIN documentos ON  idUsuario = Usuario_idUsuario);
$rows = $data->rows();
foreach ($rows as $data){
$data = $data['idUsuario'];
$data= $data['Usuario_idUsuario'];*/
    
    $qry = 'INSERT INTO Documento(autor,fecha,archivo,descripcion,tema,titulo,promedioCalificacion,	Usuario_idUsuario,Curso_idCurso,pesoDocumento) 
	values ("Melissa",CURDATE(),"pdf","'. $descripcion . '","' . $tema .'","' . $titulo .'",9,3,1,50)';

	Print "Your information has been successfully added to the database.";

	$qry_res = mysqli_query($conexion,$qry);

    mysqli_close($conexion);


?>