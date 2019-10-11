function warenkorb() {
  var Produkt1 = 'Bollerwagen';
  var Preis1 = 10.50;

  var Eingabe  = document.getElementById('Eingabe');
  var Ergebnis = Preis1 * Eingabe.value;
  alert(Produkt1 + "" + Ergebnis);
  Eingabe.value = 0;
 }

var los  = document.getElementById('los');
los.addEventListener ('click', warenkorb, true);
