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
  
 
  function submit_form(_this){
 
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
   Ajax("info_tutox",source_form+"statu_general.php"); 

  


  setTimeout(function(){ 
     var doc_g = document.getElementById("info_tuto"); 
     var doc_gx = document.getElementById("info_tutox");     
     doc_gx.title = doc_g.title;
     doc_gx.role = doc_g.role;
     doc_gx.className = doc_g.className;
     doc_gx.innerHTML = "";
      
     setTimeout(function(){ 
      if(form_=="connexion") {

        if(doc_g.title=="0") {
          doc_gx.innerHTML = "Erreur d'connexion'";
         }
         else {
          doc_gx.innerHTML = "connexion reussi";
         }
  
       }
       else {
        if(doc_g.title=="0") {
          doc_gx.innerHTML = "Erreur d'inscription'";
         }
         else {
          doc_gx.innerHTML = "Inscription reussi";
         }
       }
      }, 600);



 
   }, 1200);
  
 

  setTimeout(function(){ 
    var doc_g = document.getElementById("info_tuto"); 
    var doc_gx = document.getElementById("info_tutox"); 
   
    doc_gx.title = doc_g.title;
    doc_gx.role = doc_g.role;
    doc_gx.className = doc_g.className;
    console.log(doc_g.title)  ; 

    if(doc_g.title=="0") {
     doc_gx.innerHTML = "Erreur de connexion";
 
    }
    else {
     doc_gx.innerHTML = "Connexion reussi";
    }



  }, 1000);
 
 /*
  doc_gx.title = doc_g.title;
  doc_gx.role = doc_g.role;
  doc_gx.className = doc_g.className;
  console.log(doc_g.title)  ; 
  if(doc_g.title=="0") {
   doc_gx.innerHTML = "Erreur d'inscription";
  }
  else {
   doc_gx.innerHTML = "Inscription reussi";
  }

  */

 

 
 
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