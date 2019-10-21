<?php

    include_once("./php/login.inc.php")

?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <header>
        <iframe class="headerframe" src="./html/header.html"></iframe>
    </header>
    <nav>
        <iframe class="navframe" src="./html/nav.html"></iframe>
    </nav>
    <section>
        <div class="main">
            <h1> Anmeldung </h1>

	    <form method="POST">

                <input type="text" name="n" placeholder="Username" required><br>

                <input type="password" name="p" placeholder="Passwort" required><br>

                <input type="submit" value="Anmelden" />

            </form>
        </div>
    </section>
    <footer>
        <iframe class="footerframe" src="./html/footer.html"></iframe>
    </footer>
</body>
</html>
