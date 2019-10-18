var i = 1;
var cl = "idea";

function neuesElement(){
    //neues Element erstellen
    //neues div Element generieren

    var check_new = document.getElementById("new").value;
    if(check_new == "")
    {
        window.alert("erstellen Textfeld leer, bitte ausfüllen");
    }
    else
    {
        var content = document.createElement("p");
        content.setAttribute("id", i);
        content.setAttribute("class", cl);
        content.innerHTML = "("+i+") " + document.getElementById("new").value;
        i = i + 1;

        document.getElementById("myDiv").appendChild(content);

        if(document.getElementById("new").value=="69"){
            console.log("NICEEEEEEE"); 
        }
        if(document.getElementById("new").value=="420"){
            console.log("Blaze it"); 
        }
    }
}

function switchToNew(){

    var check_alter = document.getElementById("alter").value;
    if(check_alter ==""||check_alter<0)
    {
        window.alert("Bitte das löschen Feld korrekt ausfüllen");
    }
    else
    {
        var content = document.createElement("p");

        var temp = document.getElementById("alter").value;

        content.innerHTML = document.getElementById(temp).innerHTML;

        content.setAttribute("id", "0" + temp);
        content.setAttribute("class", cl);

        document.getElementById("newDiv").appendChild(content);

        var element = document.getElementById("alter").value;
        var loeschen = document.getElementById(element);
        loeschen.parentNode.removeChild(loeschen);

        content.setAttribute("id", temp);
    }
}

function del(){

    var check_del = document.getElementById("del").value;
    if(check_del==""||check_del<0)
    {
        window.alert("Bitte das verschieben Feld korrekt ausfüllen");
    }
    else
    {
        var element = document.getElementById("del").value;
        var loeschen = document.getElementById(element);
        loeschen.parentNode.removeChild(loeschen);
    }
}
