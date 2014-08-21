<?php
 include_once "../conexion.php";
  include_once "../funciones.php";


$data = json_decode(file_get_contents("php://input"));
$titulo = $data->titulo;
$tema = $data->tema;
$descripcion = $data->descripcion;
$dato = addslashes(file_get_contents($_FILES['archivo']['tmp_name']));
$dato_peso=$_FILES['archivo']['size'];

$qry = 'INSERT INTO Documento(autor,fecha,archivo,descripcion,tema,titulo,promedioCalificacion,	Usuario_idUsuario,Curso_idCurso,pesoDocumento) 
	values ("Alonso Guevara",CURDATE(),"$dato","'. $descripcion . '","'. $tema . '","'. $titulo . '",9,3,1,"$dato_peso")';

$qry_res = mysqli_query($conexion,$qry);


    mysqli_close($conexion);
?>