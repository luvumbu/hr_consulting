<?php 
header("Access-Control-Allow-Origin: *");
include("../model/class/php/connexion.php") ; 
 
 


 
$titre =$_POST["titre"] ;
$adresse =$_POST["adresse"] ;
$type_contrat =$_POST["type_contrat"] ;
$annonce_txt =$_POST["annonce_txt"] ;
 
 
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO annonces (titre, adresse, type_contrat,annonce_txt)
VALUES ('$titre', '$adresse', '$type_contrat','$annonce_txt')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>