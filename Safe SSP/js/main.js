
function botWahl() {
    var bot = Math.floor(Math.random() * 3);
    return bot;
}
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
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

var spiele = 1;
var pWin = 0;
var bWin = 0;
var draw = 0;

async function auswahl(wahl) {
    this.wahl = wahl;
    var bot = botWahl();
    console.log(wahl + ", " + bot);
    await roll(bot);

    if (wahl == bot) {
        console.log("Draw");
        draw++;
    }
    if (wahl == 0 && bot == 1) {
        console.log("this a loss");
        bWin++;
    }
    if (wahl == 0 && bot == 2) {
        console.log("this a win");
        pWin++;
    }
    if (wahl == 1 && bot == 0) {
        console.log("this a win");
        pWin++;
    }
    if (wahl == 1 && bot == 2) {
        console.log("this a loss");
        bWin++;
    }
    if (wahl == 2 && bot == 0) {
        console.log("this a loss");
        bWin++;
    }
    if (wahl == 2 && bot == 1) {
        console.log("this a win");
        pWin++;
    }
    console.log(pWin + ", " + draw + ", " + bWin);

}

async function roll(rand) {
    //random auswahl für zufälliges Zeigen von Schere/Stein/Papier
    //Übergebener Wert gibt endgültige Auswahl vom Bot an
    for (i = 0; i < 10; i++) {
        var a = Math.floor(Math.random() * 3);
        await Sleep(200);
        console.log(a);
    }
    console.log(rand);
}