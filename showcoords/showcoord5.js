let adresse_ip = [];
let click = [];
let id_showCoords = [];
let reg_date = [];
let x_position = [];
let y_position = [];
let mousse = document.getElementById("mousse");

let xmlhttp = new XMLHttpRequest();
 
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
   // document.getElementById("demo").innerHTML = myObj;
  
    for(let i = 1 ; i<myObj.length;i++){
 
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


let i_ = 0 ; 
var myVar ; 
setTimeout(function(){ 
  console.log(adresse_ip);
  console.log(click);
  console.log(id_showCoords);
  console.log(reg_date);
  console.log(x_position);
  console.log(y_position);



 myVar = setInterval(myTimer, 10);
  
 }, 300);

 
function myTimer() {




if(y_position[i_]!=undefined){
 
  console.log(adresse_ip[i_]) ;
  console.log(click[i_]) ;
  console.log(id_showCoords[i_]) ;
  console.log(reg_date[i_]) ;
  console.log(x_position[i_]) ;
  console.log(y_position[i_]) ;

  mousse.style.top=y_position[i_]+'px';
mousse.style.left=x_position[i_]+'px';
i_++;
}
else {
  console.log('fin') ; 
  clearInterval(myVar);
}
 
 


}



 




function Ajax(id,source){
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(id).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", source, true);
  xhttp.send();
}



Ajax("section","../view/form/home.php");


setTimeout(function(){
  Ajax("section","../view/form/home.php"); 
 }, 110);
// exemple de code 

/* 
Ajax(nomId,document/source.txt);
*/


  //var refreshIntervalId = setInterval(fname, 10000);