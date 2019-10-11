let thisProdukt = localStorage["produkt"];
let thisPreis = localStorage["preis"];
let thisAnzahl = localStorage["anzahl"];

console.log(thisProdukt);
console.log(thisAnzahl);

document.getElementById('produktAusgabe').innerHTML = thisProdukt;
document.getElementById('preisAusgabe').innerHTML = thisPreis;
document.getElementById('anzahlAusgabe').innerHTML = thisAnzahl;
