
<p class="h3">h1. Bootstrap heading</p>

 
<p><u>This line of text will render as underlined.</u></p>

<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>

<?php

include("../../model/class/php/connexion.php"); 
 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = 'SELECT * FROM `users` WHERE 1';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "input_mail: " . $row["input_mail"];
  }
} else {
  echo "0 results";
}
$conn->close();
 
?>