<?php

function ObtenerUsuarios($conexion) {
	
// 	$email =["email"];
// 	$query = mysqli_query($conexion, "select * from Usuario");

// }

// $listaUsuarios = Array();

// while ($item = mysqli_fetch_array($query)) {

// 	array_push($listaUsuarios, $item);

// }


// echo '<pre>';
// print_r($listaUsuarios);
// echo '</pre>';

// echo json_encode($listaUsuarios);

$result = mysqli_query($conexion, "SELECT * FROM Usuario");


# Collect the results
while($obj = mysqli_fetch_object($result)) {
    $arr[] = $obj;
}

# JSON-encode the response
$json_response = json_encode($arr);

// # Return the response
echo $json_response;

 // while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
 // 	$name = $row['nombre'];
 // 	echo '</br>This is: <b>'.$name.'</b></br>';
 // }
                            


    mysqli_free_result($result);


 	// echo '</br>end';

mysqli_close($conexion);
}

?>