<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json');
	$email = $_POST['email'];
	$pass = $_POST['password'];
	$response = array();

	if ($email == 'jnandezp@gmail.com' && $pass == '123123') {
		$response = array('id'=>'1','name'=>'Jose Ivan Nandez Parra', 'email' => 'jnandezp@gmail.com', 'status' => '1');
		$response = json_encode($response);
		echo $response;
		exit();
	}else{
		$response = json_encode($response);
		throw new Exception("Error Processing Request", 1);
		exit();
	}
	exit();
?>
