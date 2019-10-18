<?php
//login.inc.php
session_start();
//Sessionverwaltung wird gestartet
//Cookie wird beim Client angelegt, Sessioncookie

//Wenn Querystring enthält variablenname n

if(isset($_POST['n'])){
$_SESSION['user'] = ($_POST['n'] );
header("Location: mainpage.php");
exit; //weiter Code ausführung unterbinden
}


?>
