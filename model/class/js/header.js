function navbar(_this){     
    var navbar=document.getElementById("navbarNav");     
    if(navbar.className=="collapse navbar-collapse") {
        console.log("navbar off");
        navbar.className="navbar-collapse";
    }
    else {
        console.log("navbar on");
        navbar.className="collapse navbar-collapse";
    }
}
 