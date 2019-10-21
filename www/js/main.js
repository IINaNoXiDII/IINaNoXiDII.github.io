function toggleDarkMode(){
    var x = document.getElementById("body");
    
    if(x.style.backgroundColor === "#353535"){
        x.style.backgroundColor = "#fff";
    }
    else{
        x.style.backgroundColor = "#353535"
    }
}

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
