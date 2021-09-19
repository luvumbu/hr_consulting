 
<link rel="stylesheet" href="test.css">

<div id="red"></div>

 
 


<?php 
include("../view/header.php");
include("../view/section.php");
include("../view/footer.php");
include("../link_showcoords.html");

?>
 


<div id="showcoords">
    <div class="showcoords_title">  
        <h1>showcoords</h1>
    </div>
    <div id="showcoords_data"></div>
    <div>
        <?php
        include("total_info.php"); 
        ?> 
    </div>
</div>

<div id="ouvrir" >
    <i class="fa fa-adjust" id="fa_adjust" onclick="showcoords_(this)"></i>
</div>

<style>
#showcoords {
  background-color:rgba(0,20,225,0.2); 
  width:30%;
  margin:auto;
  position:absolute;
  top:0;
  right:0; 
  opacity: 0.5;
}
#showcoords h1 {
  background-color:rgba(0,20,225,0.2); 
  text-align:center; 
  color:white;
}
#showcoords_data{
  display:flex; 
  justify-content:space-around; 
}
#ouvrir{
  position:absolute;
 
  width:30px;
  height:30px;
 font-size:3em;
 top:0;
 margin:auto;
 opacity: 0.4;
 transition:0.1s all ; 
  
}

#ouvrir:hover{
 opacity: 1;
 transition:1s all ; 
  
}
  

 .rotation_1{
  transform: translate(100px, 0);
  transform: rotate(-0.5turn);
  transition:1s all;
 }
 .fa-adjust {
  transition:1s all;
}

 </style> 


<script src="test.js"></script>
 