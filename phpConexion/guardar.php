<?php

$conexion = mysql_connect("localhost","root","") 
 or die("problemas al conectar a el host");
$bd = mysql_select_db("longinetbd",$conexion)
or die("no se puede conectar a la BD");

$dato = addcslashes(file_get_contents($_FILES['archivo']['tem_name']));
$sql = mysql_query("INSERT INTO documento VALUES('','$dato')");

if(sql){
	echo "datos agregados";
}else{
	echo mysql_error();
}

?>