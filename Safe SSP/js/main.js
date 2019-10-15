
function garbage() {


    var bot = Math.floor(Math.random() * 3);


    return bot;

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

function auswahl(wahl) {
    this.wahl = wahl;
    var bot = garbage();
    console.log(wahl + ", " + bot);


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
    console.log(pWin+", "+draw+", "+bWin);
    
}