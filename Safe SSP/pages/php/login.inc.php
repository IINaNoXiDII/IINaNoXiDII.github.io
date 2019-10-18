<?php
//login.inc.php
session_start();
//Sessionverwaltung wird gestartet
//Cookie wird beim Client angelegt, Sessioncookie

//Wenn Querystring enthält variablenname n

if(isset($_GET['n'])){
$_SESSION['user'] = $_GET['n'];
header("Location: /Safe SSP/pages/menue.php");
exit; //weiter Code ausführung unterbinden
}


?>