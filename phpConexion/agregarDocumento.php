<?php

include_once "conexion.php";
include_once "funciones/documentosFunciones.php";

$data = json_decode(file_get_contents("php://input"));

$autor = $data->autor;

$descripcion = $data->descripcion;
$tema = $data->tema;
$titulo = $data->titulo;
$promedio = 0;
$idUsuario = $data->idUsuario;
$curso = $data->curso;

$pesoDocumento = $data->size;
$archivo = $data->archivo;


$resultado = InsertarDocumento($conexion, $autor, $archivo, $descripcion, $tema, $titulo, $idUsuario, $curso, $pesoDocumento);
echo $resultado;



mysqli_close($conexion);



// $lista = Array();

// while ($item = mysqli_fetch_array($resultado)) {
// 	//$item['show'] = true;
// 	array_push($lista, $item);

// }


// echo json_encode($lista);


?>