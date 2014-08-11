<?php

function ObtenerUsuarios($conexion, $parametro) {
	
	$email = $parametro["email"];
	$query = mysqli_query($conexion, "select * from Usuario where correoElectronico = '$email'");

}

$listaUsuarios = Array();

while ($item = mysqli_fetch_array($query)) {

	array_push($listaUsuarios, $item);

}


echo '<pre>';
print_r($listaUsuarios);
echo '</pre>';

echo json_encode($listaUsuarios);

?>