<?php 
session_start() ; 
header("Access-Control-Allow-Origin: *");

if($_SESSION['form_']=="connexion"){

    if($_SESSION['statu_general']=="404"){
        ?>
        
        <div class="alert alert-danger form_global" role="alert" id="info_tuto" title="0">
        Erreur de connexion
        </div>
         
        <?php 
        }
        else {
        ?>
        <div class="alert alert-success form_global" role="alert" id="info_tuto" title="0">
        connexion ok
        </div>
        </div>
        <?php 
        }
}
else {
    if($_SESSION['statu_general']=="404"){
        ?>
        
        <div class="alert alert-danger form_global" role="alert" id="info_tuto" title="0">
       erreur inscription l'itilisateur exite 
        </div>
         
        <?php 
        }
        else {
        ?>
        <div class="alert alert-success form_global" role="alert" id="info_tuto" title="0">
        Inscription ok
        </div>
        </div>
        <?php 
        }
}


?>
