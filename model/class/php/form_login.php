<?php
session_start();

header("Access-Control-Allow-Origin: *");

$form_     =$_POST["form_"] ; 


 


include("connexion.php");  
$input_mail     =$_POST["input_mail"] ;
$_SESSION['input_mail']     =$input_mail;
 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


if($form_ =="connexion") {

    $input_password =$_POST["input_password"] ; 
    echo $input_password ; 
    echo $input_mail ; 
    





// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = 'SELECT * FROM `users` WHERE `input_mail` ="'.$input_mail.'" AND `input_password` ="'.$input_password.'"';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
 
    $_SESSION['statu_connexion']="777" ; 
    
  }
} else {
  echo "error connexion";
  $_SESSION['statu_connexion']="404" ; 
}
$conn->close();
    

}
else {

 
    
    echo $input_mail ; 
}

 
 
 

 
?>