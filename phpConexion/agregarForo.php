<?php
error_reporting(-1);
include_once "conexion.php";
include_once "funciones/forosFunciones.php";

$data = json_decode(file_get_contents("php://input"));

$id = isset($data->idForo) ? $data->idForo : 0;
$tema = $data->tema;
$descripcion = $data->descripcion;
$fecha_creacion = $data->fecha_creacion;
$fecha_cierre = $data->fecha_cierre;

$nuevoId = 0;
if ($id == 0) {
	AgregarTemas($conexion, $tema, $descripcion, $fecha_creacion, $fecha_cierre);
	$ultimoId = ObtenerIdForo($conexion);
	$datos = mysqli_fetch_array($ultimoId);
	$nuevoId = $datos['idForo'];
}
else {
	editarTema($conexion, $tema, $descripcion, $fecha_creacion, $fecha_cierre, $id);
} 



echo $nuevoId;



// $lista = Array();

// while ($item = mysqli_fetch_array($resultado)) {
// 	//$item['show'] = true;
// 	array_push($lista, $item);

// }


// echo json_encode($lista);


?>