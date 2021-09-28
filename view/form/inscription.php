<?php 
session_start() ; 
?>

<div    id="info_tutox"></div>
 
<div id="info_inscription"></div>
<form class="form_global" id="form" title="inscription">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="input_mail" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-check"></div>
    <button type="submit" style="background-color:#00263d ; border:1px solid #00263d" class="btn btn-primary" id="submit_" onclick="submit_form(this)" title="inscription">Submit</button>
  </form>
 

 