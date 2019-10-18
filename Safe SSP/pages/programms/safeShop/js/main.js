function toggleMobileNav() {
  var x = document.getElementById("nav-mobile");
  if (x.style.overflow === "visible") {
    x.style.overflow = "hidden";
  } else {
    x.style.overflow = "visible";
  }
}

function hideMobileNav() {
    var y = document.getElementById("nav-mobile");
    y.style.overflow = "hidden";
}  

function validate() {
  var vorname = document.getElementById("vorname").value;
  var name = document.getElementById("name").value;
  //var land = document.getElementById("Iban-Country").value;
  //var iban = document.getElementById("iban").value;


  //var reg = /[A-Z][A-Z][\.\-\s]\d\d[\.\-\s](\d{4}[\.\-\s]){4}\d{2}|[A-Z][A-Z]\d{20}|[A-Z][A-Z][\.\-\s]\d{20}/ig;
  var reg = /[A-Z][A-Z][\.\-\s]?\d\d[\.\-\s]?(\d{4}[\.\-\s]?){4}\d{2}/ig;

  var land = document.getElementById("Iban-Country").value;
  var iban = document.getElementById("iban").value;
  var iban_comp = land + " " + iban;
  var res = reg.test(iban_comp);

  console.log(iban_comp + ", " + res);
  if (res == true) {

      document.getElementById("prove").innerHTML = "OK";
      return true;
  } else {
      window.alert("IBAN ist nicht korrekt.")
      document.getElementById("prove").innerHTML = "nicht OK";
      return false;
  }
}


function addCart() {
  var preis = parseFloat(document.getElementById("Preis").innerHTML, 10);
  var gesamt = parseFloat(window.localStorage.getItem("Gesamtpreis"), 10);
  gesamt = gesamt + preis;
  localStorage.setItem('Gesamtpreis', gesamt);
  console.log(preis + ", " + gesamt);
  window.alert("Produkt in den Warenkorb gelegt");
}
function removeCart() {
  var preis = parseFloat(document.getElementById("Preis").innerHTML, 10);
  var gesamt = parseFloat(window.localStorage.getItem("Gesamtpreis"), 10);
  gesamt = gesamt - preis;
  localStorage.setItem('Gesamtpreis', gesamt);
  console.log(preis + ", " + gesamt);
  window.alert("Produkt aus dem Warenkorb entfernt");
}

function getCart() {
  document.getElementById("gesamt").innerHTML = localStorage.getItem('Gesamtpreis');
  // document.getElementById("gesamt").innerHTML += elemente;
}
function reset() {
  localStorage.clear();
}

function init() {
  if (localStorage.getItem('Gesamtpreis') != null) {
  } else {
      localStorage.setItem('Gesamtpreis', 0);
  }
}