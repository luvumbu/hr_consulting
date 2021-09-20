function navar_click_(el){
    // ajout asynchrone information dans le div section 
    const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {

    document.getElementById("section").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "view/form/"+el+".php");
  xhttp.send();  
  }

  
  const source_form ="view/form/";
  //navar_click_("connexion");
  
 
  function submit_form(){
 
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
    
    
     
    Ajax("statu_connexion",source_form+"statu_connexion.php"); 

    setTimeout(function(){ 
     
      var info_g = document.getElementById("info_tuto") ; 
      var variable_de_temps="3000";
 
      if(info_g.title=="0"){
        document.getElementById("info_tutox").className=info_g.className;
        document.getElementById("info_tutox").role=info_g.role;
        document.getElementById("info_tutox").innerHTML="Erreur de connexion";

        setTimeout(function(){ 
          document.getElementById("info_tutox").className="";
          document.getElementById("info_tutox").role="";
          document.getElementById("info_tutox").innerHTML="";

         }, variable_de_temps);
 
      }
      else {
  
 console.log("nada") ; 
 Ajax("info_inscription",source_form+"statu_inscription.php");

 setTimeout(function(){ 
 
 
  
 

  document.getElementById("info_tutox").className=document.getElementById("info_tuto").className;
  document.getElementById("info_tutox").role=document.getElementById("info_tuto").role;
  

if(document.getElementById("info_tuto").title=="0") {
  document.getElementById("info_tutox").innerHTML="Utilisateur existant merci de vous connecter";
}
else {
 document.getElementById("info_tutox").innerHTML="Inscription reussi";
}
setTimeout(function(){ 

  document.getElementById("info_tutox").className="";
  document.getElementById("info_tutox").role="";
 document.getElementById("info_tutox").innerHTML="";

 }, 3000);

 }, 300);



      }
     }, 300);


    
  
  }, 300);
 
 
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