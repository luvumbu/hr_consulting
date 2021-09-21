<?php
session_start();
$_SESSION['statu_general']="";
header("Access-Control-Allow-Origin: *");
$form_     =$_POST["form_"] ; 
include("connexion.php");  
$input_mail     =$_POST["input_mail"] ;
$_SESSION['input_mail']     =$input_mail;


$_SESSION['form_'] = $form_ ; 
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
    $_SESSION['statu_general']="777" ; 
  }
} else {
  echo "error connexion";
  $_SESSION['statu_general']="404" ; 
  // Liste di
$SERVER_NAME =  $_SERVER['SERVER_NAME'];
if($SERVER_NAME="localhost"){ 
} 
  /*
echo "<br>";
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
*/
}
$conn->close();
    

}
else {

 // Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = 'SELECT * FROM `users` WHERE `input_mail`="'.$input_mail.'"';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "echec de linscription";
    $_SESSION['statu_general']="404" ; 
  }
} else {
  $_SESSION['statu_general']="777" ; 
  echo "inscription ok" ; 
// Create connection
 
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (input_mail)
VALUES ('$input_mail')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
}
$conn->close();
} 
?>