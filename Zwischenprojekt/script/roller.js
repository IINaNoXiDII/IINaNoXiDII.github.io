function warenkorb() {
  var ProduktName = 'E-Bike';
  var ProduktPreis = 499;
  localStorage["produkt"] = ProduktName;

  var Eingabe  = document.getElementById('Eingabe');
  var Ergebnis = ProduktPreis * Eingabe.value;
  localStorage["preis"] = Ergebnis;
  localStorage["anzahl"] = Eingabe.value;
  Eingabe.value = 1;
 }

var los  = document.getElementById('los');
los.addEventListener ('click', warenkorb, true);
