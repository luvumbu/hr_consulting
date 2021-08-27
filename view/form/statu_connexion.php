<?php 
session_start() ; 
header("Access-Control-Allow-Origin: *");
if($_SESSION['statu_connexion']=="404"){
?>

<div class="alert alert-danger form_global" role="alert">
    Mot de pass ou adresse mail incorrect
  </div>

<?php 
}
else {
?>
<div class="alert alert-success form_global" role="alert">
 Connexion reussi 
</div>
<?php 
}
?>
