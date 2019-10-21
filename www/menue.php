<?php

    include_once("./php/secure.inc.php")

?>

<!DOCTYPE html>

<html lang="de">



<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Menü</title>
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
            <h1>Menü</h1>
	<?php 

        echo "Willkommen ".$_SESSION['user'];

    ?>

    <br>

    <a href="./pages/safeBoard/index.html">safeBoard</a><br>
    <a href="./pages/safeShop/index.html">safeShop</a><br>
    <a href="./pages/safeSunshine/index.php">safeSunshine</a>
        </div>
    </section>
    <footer>
        <iframe class="footerframe" src="./html/footer.html"></iframe>
    </footer>
    

</body>



</html>