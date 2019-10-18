<?php
//php/secure.inc.php

session_start();
//wenn keine Session Existiert
if(!isset($_SESSION['user'])){
    //User umleiten auf Anmeldeseite
    header("Location: index.php");
    exit;
}
###################################
#           Logout               #
###################################
if(isset($_GET['logout'])){
    session_unset();
    session_destroy(); //auflösen der Session
    header("Location: index.php");
    exit;
}

?>
