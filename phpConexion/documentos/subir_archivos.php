<?php
    include_once "../conexion.php";
   

    $data = json_decode(file_get_contents("php://input"));

	$tema = $data->tema;
	$titulo = $data->titulo;
	$descripcion = $data->descripcion;
	$autor = "Alonso Guevara";
	$data = file_get_contents(['archivo']['tmp_name']);
	$data = mysqli_real_escape_string($data);
	
    
    $qry = 'INSERT INTO Documento(autor,fecha,archivo,descripcion,tema,titulo,promedioCalificacion,	Usuario_idUsuario,Curso_idCurso,pesoDocumento) 
	values ("'. $autor . '",CURDATE(),"'. $data . '","'. $descripcion . '","' . $tema .'","' . $titulo .'",9,3,1,50)';

	Print "Your information has been successfully added to the database.";
    $qry_res = mysqli_query($conexion,$qry);
	
 
    mysqli_close($conexion);
?>