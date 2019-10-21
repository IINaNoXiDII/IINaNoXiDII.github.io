<?php

	$servername = "safexbusxbmaindb.mysql.db";
	$username = "safexbusxbmaindb";
	$password = "dbMaster1";
	$name = "safexbusxbmaindb";

	%connect = mysqli_connect($servername, $username, $password, $name);

	if(!connect){
		die("Connection failed: ".mysqli_connect_error());
	}

?>