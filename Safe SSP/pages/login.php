<?php
    include_once("./php/login.inc.php")
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Php index.php</title>
</head>

<body>
    <h1> Anmeldung </h1>

    <form method="GET">
        <input type="text" name="n" placeholder="Username" required><br>
        <input type="password" name="p" placeholder="Passwort eingeben" required><br>
        <input type="submit" value="Anmelden" />
    </form>
</body>

</html>