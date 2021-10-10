let adresse_ip = [];
let click = [];
let id_showCoords = [];
let reg_date = [];
let x_position = [];
let y_position = [];

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
   // document.getElementById("demo").innerHTML = myObj;
  
    for(var i = 1 ; i<myObj.length;i++){
 
      adresse_ip.push(myObj[i].adresse_ip);
      click.push(myObj[i].click);
      id_showCoords.push(myObj[i].id_showCoords);
      reg_date.push(myObj[i].reg_date);
      x_position.push(myObj[i].x_position);
      y_position.push(myObj[i].y_position);
 


 
 
    }
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

 

setTimeout(function(){ 
  console.log(adresse_ip);
  console.log(click);
  console.log(id_showCoords);
  console.log(reg_date);
  console.log(x_position);
  console.log(y_position);
 }, 300);