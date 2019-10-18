<?php
    include_once("./php/secure.inc.php")
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Menü</title>
</head>

<body>
    <?php 
        echo "Willkommen ".$_SESSION['user'];
        
        
    ?>
    <br>
    <a href="./programms/safeSunshine/index.php">safeSunshine</a>
</body>

</html>