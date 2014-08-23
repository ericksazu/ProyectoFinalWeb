<?php
//die($_FILES['file']['tmp_name']);
if (move_uploaded_file($_FILES['file']['tmp_name'],'../uploads/'.$_FILES['file']['name'])) {
	echo json_encode($_FILES['file']);
}
else {
	'error';
}

?>