
function navar_click_btn(_this) {

  // ajout asynchrone information dans le div section 
  const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
 
  document.getElementById("section").innerHTML =
  this.responseText;
}

 xhttp.open("GET", "view/form/"+_this.title+".php");

//xhttp.open("GET", "view/form/connexion_.php");

xhttp.send();
 
}

const source_form ="view/form/";
//navar_click_("connexion");

function apparence_btn(){
  const form_ = document.getElementById("form").title;
  const input_mail = document.getElementById("input_mail") ;
  const input_password = document.getElementById("input_password") ; 

  document.getElementById("submit_").disabled = true;
  setTimeout(function(){
    document.getElementById("submit_").disabled = false;
   }, 1000);

  var ok = new Information("model/class/php/form_login.php"); // création de la classe 
   ok.add("input_mail", input_mail.value); // ajout de l'information pour lenvoi  
   ok.add("form_", form_); // ajout d'une deuxieme information denvoi 
  if(form_=="connexion"){    
      ok.add("input_password", input_password.value); // ajout d'une deuxieme information denvoi          
  }


console.log(ok.info()); // demande l'information dans le tableau
ok.push(); // envoie l'information au code pkp 




 setTimeout(function(){
  Ajax("info_tutox",source_form+"statu_general.php"); 
 }, 1100);
}
function submit_form(_this){


  apparence_btn();
  //console.log(_this.title) ; 



  setTimeout(function(){ 

  document.getElementById("info_tuto").style.display="none" ; 

   }, 3000);





}
// SERIE TES


setTimeout(function(){ 
  
  
   // apres 300ms chargement du formulaire php 
   
  Ajax("section",source_form+"home.php"); 

 


}, 10);


/*

// SERIE TES ajout des valeur dans le formulaire automatiquement
setTimeout(function(){ 
  
  //testing 
  // apres 300ms chargement du formulaire php 
  
var input_mail= document.getElementById("input_mail").value="un"; 
var input_password= document.getElementById("input_password").value="un"; 




}, 100);


*/
function section_click(_this) {


Ajax("header_option",source_form+_this.title+".php"); 



}