function warenkorb() {
  var ProduktName = 'Bollerwagen';
  var ProduktPreis = 84.99;
  localStorage["produkt"] = ProduktName;

  var Eingabe  = document.getElementById('Eingabe');
  var Ergebnis = ProduktPreis * Eingabe.value;
  localStorage["preis"] = Ergebnis;
  localStorage["anzahl"] = Eingabe.value;
  Eingabe.value = 1;
 }

var los  = document.getElementById('los');
los.addEventListener ('click', warenkorb, true);
