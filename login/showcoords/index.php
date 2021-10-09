 
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
 


<script src="test.js"></script>
 