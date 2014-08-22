<?php

include_once "../conexion.php";
include_once "../funciones/usuariosFunciones.php";

$olvido = $_POST['email2'];

// echo 'KILO ' .$olvido; die();

$resultado = "SELECT contrasena FROM Usuario WHERE email = '".$olvido."' ";

$resultado2 = mysqli_query($conexion,$resultado);

$row = mysqli_fetch_assoc($resultado2);

$contrasena = $row['contrasena'];

// echo $contrasena; die();
//send email containing their password to their email address
mail($olvido, 'Esta es su contrasena olvidada', "Esta es su contrasena: ".$contrasena."" , 'From: nocontestar@LoginNet.cr');

header('location: ../..#');

mysqli_close($conexion);

?>