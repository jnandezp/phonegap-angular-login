<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json');
	$user = $_POST['user'];
	$pass = $_POST['password'];
	if ($user == 'jnandezp' & $pass == '123123') {
		$response = array('token'=>'oiqoimsofiniusnfiuwne839382');
		$response = json_encode($response);
		echo $response;
	}
?>
