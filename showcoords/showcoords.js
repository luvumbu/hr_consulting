var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
   // document.getElementById("demo").innerHTML = myObj;
    console.log(myObj);
  }
};
xmlhttp.open("GET", "showcoords.php", true);
xmlhttp.send();



/*
    effacement de methode onclick  #1
*/ 

document.getElementById("my_home").setAttribute("onclick","") ; 
document.getElementById("my_connexion").setAttribute("onclick","") ; 
document.getElementById("my_inscription").setAttribute("onclick","") ; 
document.getElementById("my_autre").setAttribute("onclick","") ; 
document.getElementById("my_btn").setAttribute("onclick","") ; 
/*
    effacement de methode onclick #1
*/
 