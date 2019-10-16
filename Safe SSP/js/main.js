
function botWahl() {
    var bot = Math.floor(Math.random() * 3);
    return bot;
}
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
function translate(bot) {
    imgs = [
        '<i class="far fa-hand-scissors fa-5x">',
        '<i class="far fa-hand-rock fa-5x">',
        '<i class="far fa-paper-plane fa-5x">'
    ]
    return imgs[bot];
}


var spiele = 1;
var pWin = 0;
var bWin = 0;
var draw = 0;

async function auswahl(wahl) {
    var sleep = 80;
    document.getElementById("userchoise").innerHTML = translate(wahl);
    this.wahl = wahl;
    var bot = botWahl();
    console.log(wahl + ", " + bot);
    await roll(sleep);

    if (wahl == bot) {
        console.log("Draw");
        document.getElementById("message").innerHTML = "Unendschieden";
        draw++;
    }
    if (wahl == 0 && bot == 1) {
        document.getElementById("message").innerHTML = "Stein schleift Schere, du hast verloren.";
        console.log("this a loss");
        bWin++;
    }
    if (wahl == 0 && bot == 2) {
        document.getElementById("message").innerHTML = "Schere schneidet Papier, du hast gewonnen.";
        console.log("this a win");
        pWin++;
    }
    if (wahl == 1 && bot == 0) {
        document.getElementById("message").innerHTML = "Stein schleift Schere, du hast gewonnen.";
        console.log("this a win");
        pWin++;
    }
    if (wahl == 1 && bot == 2) {
        document.getElementById("message").innerHTML = "Papier bedeckt Stein, du hast verloren.";
        console.log("this a loss");
        bWin++;
    }
    if (wahl == 2 && bot == 0) {
        document.getElementById("message").innerHTML = "Schere schneidet Papier, du hast verloren.";
        console.log("this a loss");
        bWin++;
    }
    if (wahl == 2 && bot == 1) {
        document.getElementById("message").innerHTML = "Papier bedeckt Stein, du hast gewonnen.";
        console.log("this a win");
        pWin++;
    }
    console.log(pWin + ", " + draw + ", " + bWin);
    document.getElementById("pWin").innerHTML = pWin;
    document.getElementById("draw").innerHTML = draw;
    document.getElementById("bWin").innerHTML = bWin;
    document.getElementById("compchoise").innerHTML = translate(bot);
}

async function roll(sleep) {

    for (i = 0; i < 9; i++) {
        for (f = 0; f <= 2; f++) {
            console.log(f);
            await Sleep(sleep);
            navigator.vibrate(sleep/2);
            document.getElementById("compchoise").innerHTML = translate(f);
        }
        f = 0;
        sleep = sleep * 1.2;
        console.log(sleep);

    }
    

}


/*
################################################################
#                           Legacy Code                        #
#    wird nicht mehr gebraucht, bleibt aber erstmal mit dabei, #
#      falls mal alte Ideen wieder ausgegraben werden müssen   #
################################################################

Basic game Logic
------------------
/*schere = 0
    Stein = 1
    Papier = 2
    wenn:  == -> Draw
    wenn
        0 -> 1  Verloren
        0 -> 2  Sieg
        1 -> 0  Sieg
        1 -> 2  Veloren
        2 -> 0  Verloren
        2 -> 1  Sieg
*/


/*
async function roll(rand) {
    //random auswahl für zufälliges Zeigen von Schere/Stein/Papier
    //Übergebener Wert gibt endgültige Auswahl vom Bot an
    for (i = 0; i < 10; i++) {
        var a = Math.floor(Math.random() * 3);
        await Sleep(200);
        console.log(a);
        navigator.vibrate(100);
        document.getElementById("compchoise").innerHTML=translate(a);
    }
    console.log(rand);

}
*/