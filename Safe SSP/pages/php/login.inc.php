<?php
//login.inc.php
session_start();
//Sessionverwaltung wird gestartet
//Cookie wird beim Client angelegt, Sessioncookie

//Wenn Querystring enthält variablenname n

function check($password){
    $fehler = "";
    if(strlen($password) < 8) $fehler = "Passwort muss mindesten 8 Zeichen haben.";
    if(!ctype_alnum($password)) $fehler = "Passwort darf nur aus Buchstaben und Zahlen bestehen.";
    return $fehler;
}

if(isset($_GET['n'])){
    $_SESSION['user'] = $_GET['n'];
}

if(isset($_GET['p']) && $_GET['p'] != ""){
    $fehler = check($_GET['p']);
    if($fehler == ""){
    $_SESSION['passwort'] = ($_GET['p'] );
    header("Location: /Safe SSP/pages/menue.php");
    exit; //weiter Code ausführung unterbinden
    }else{
        echo $fehler;
    }
}

if(isset($_GET['n'])){
    $_SESSION['user'] = $_GET['n'];
}

// if(isset($_GET['n'])){
// $_SESSION['user'] = $_GET['n'];
// header("Location: /Safe SSP/pages/menue.php");
// exit; //weiter Code ausführung unterbinden
// }


?>