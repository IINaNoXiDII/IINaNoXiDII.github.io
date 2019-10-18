<?php
  include_once("../../php/secure.inc.php")
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
</head>

<body>
    <a href="?logout=true">logout</a>
    <section>
        <div class="header flex-container">
            <h1><img class="h1" src="./img/cooltext338546232751032.png"></h1>
            <img id="l1" src="./img/logo.png">
            <img id="l2" src="./img/logo.png">
        </div>
        <div class="scores flex-container">
            <p id="user">Score User: <span id="pWin"></span></p>
            <p>Draws: <span id="draw"></span></p>
            <p id="comp">Score Computer: <span id="bWin"></span></p>
        </div>
        <div class="interact">
            <div class="choises flex-container">
                <div class="userchoise">
                    <div class="images">
                        <p id="userchoise"></p>
                        <div id="desk-button" class="desk-buttons">
                            <!-- <div class="desk"><img src="./img/openned-scissors.svg" onclick="auswahl(0)"></div>
                            <div class="desk"><img src="./img/hot-stones.svg" onclick="auswahl(1)"></div>
                            <div class="desk"><img src="./img/paper-plane.svg" onclick="auswahl(2)"></div> -->
                            <div class="desk"><i class="far fa-hand-scissors fa-5x" onclick="auswahl(0)"></i></div>
                            <div class="desk"><i class="far fa-hand-rock fa-5x" onclick="auswahl(1)"></i></div>
                            <div class="desk"><i class="far fa-paper-plane fa-5x" onclick="auswahl(2)"></i></div>
                        </div>
                    </div>
                </div>
                <div class="compchoise">
                    <p id="compchoise"></p>
                    <div></div>
                </div>
            </div>
            <div class="message">
                <p id="message"></p>
            </div>
            <div class="buttons flex-container">
                <div onclick="auswahl(0)"><i class="far fa-hand-scissors fa-5x"></i></div>
                <div onclick="auswahl(1)"><i class="far fa-hand-rock fa-5x"></i></div>
                <div onclick="auswahl(2)"><i class="far fa-paper-plane fa-5x"></i></div>
            </div>
        </div>
    </section>
    <script src="./js/main.js"></script>
</body>

</html>