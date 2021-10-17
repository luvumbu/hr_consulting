

<script>
    class Information {
	constructor(link) {
		this.link = link;
		this.identite = new FormData();
		this.req =		new XMLHttpRequest();
		this.identite_tab = [
		];
	}
	info() {
		return this.identite_tab; 
	}
	add(info, text){
		this.identite_tab.push([info, text]); 
	}
push(){
		for(var i = 0 ; i < this.identite_tab.length ; i++){
			console.log(this.identite_tab[i][1]);
			this.identite.append(this.identite_tab[i][0], this.identite_tab[i][1]);		 
		}		
		this.req.open("POST",this.link);
		this.req.send(this.identite);
		console.log(this.req);	 
	}
}
 

function action() {

	let titre = document.getElementById("titre").value ; 


	let adresse = document.getElementById("adresse").value ; 

	let type_contrat = document.getElementById("type_contrat").value ; 

	let annonce_txt = document.getElementById("annonce_txt").value ; 

	




 
  var ok = new Information("add.php"); // création de la classe 
  ok.add("titre", titre); // ajout de l'information pour lenvoi 
  ok.add("adresse", adresse); // ajout de l'information pour lenvoi 
  ok.add("type_contrat", type_contrat); // ajout de l'information pour lenvoi 
  ok.add("annonce_txt", annonce_txt); // ajout de l'information pour lenvoi 
 
  console.log(ok.info()); // demande l'information dans le tableau
  ok.push(); // envoie l'information au code pkp 


}

</script>

<div style="width:80%;margin:auto">


<input class="form-control form-control-lg" type="text" id="titre" placeholder="titre">
<input class="form-control form-control-lg" type="text" id="adresse" placeholder="adresse">
<input class="form-control form-control-lg" type="text" id="type_contrat" placeholder="type_contrat">
 <textarea name=""   cols="30" rows="10" class="form-control form-control-lg" placeholder="annonce_txt" id="annonce_txt" ></textarea>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<button type="button" class="btn btn-primary" onclick='action()'>Envoyer</button></div>