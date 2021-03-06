/** @namespace */

const bizOnline = (function (){
  "use strict"

  var tabl = [];

  var Produit = function (nom, prix, description, ref, couleur, poids){
    this.nom= nom;
    this.prix= prix;
    this.description= description;
    this.ref= ref;
    this.couleur= couleur;
    this.poids= poids;
  };

/**
 * fonction permettant de générer une réference contenant une lettre et 5
 chiffres de façon aléatoire
 * @alias bizOnline.refAleatoire
 * @return {string} ref retourne la réference aléatoire
 */

  const refAleatoire  = function(){
    let chiffreAleatoire;
    let tablLettre = ["A", "B", "C", "D", "E"];
    let choixLettre = Math.floor(Math.random()*5);
    let ref = tablLettre[choixLettre];

    for (var i = 0; i < 5; i++) {
      chiffreAleatoire = Math.floor(Math.random()*9);
      ref += chiffreAleatoire;
    };
    return ref;
  };

/**
 * fonction permmetant de recuperer les valeurs du formaulaire et de creer
 un nouvel objet
 * @alias bizOnline.creerProduit
 * @return {array} retourne un array de tous les objets
 */

  const creerProduit = function(){

    var nom = document.getElementById('nom');
    var prix = document.getElementById('prix');
    var description = document.getElementById('description');
    var couleur = document.getElementById('couleur');
    var poids = document.getElementById('poids');
    var ref = refAleatoire();

    verifier();

      if(nom.value != "" && prix.value != "" && description.value != ""){
      alert("Le produit a été ajouter");
      tabl.push(new Produit(nom.value, prix.value, description.value, ref, couleur.value, poids.value));
      console.log(tabl);
      ajouter();
      nom.value = "";
      prix.value = "";
      description.value = "";
      couleur.value = "#000000";
      poids.value = 0;
    };
    return tabl;
  };

  /**
   * fonction permmetant de verifier les valeur saisies par l'utilisateur
   * @alias bizOnline.verifier
   * @return {undefined} le fonction ne retourne rien
   */

  const verifier = function(){
    if(isNaN(nom.value) === false){
      alert("le nom n'est pas valide, veuillez recommencer");
      nom.value = "";
    };

    if(isNaN(prix.value) === true){
      alert("le prix n'est pas valide, veuillez recommencer");
      prix.value = "";
    };

    if(isNaN(description.value) === false){
      alert("la description n'est pas valide, veuillez recommencer");
      description.value = "";
    };


  };

  /**
   * la fonction permmet d'ajouter au tableau html le nouveau produit
   * @alias bizOnline.ajouter
   * @return {undefined} le fonction ne retourne rien
   */

  const ajouter = function(){
    var caseTableau = document.getElementById('tbody');
    var temp = "";

    for (var i = 0; i < tabl.length; i++) {
        temp += "<tr><td>"+[i+1]+"</td><td>"+ tabl[i].nom + "</td>"+
        "<td>"+ tabl[i].prix + "</td>"+
        "<td>"+ tabl[i].description +"</td>"+
        "<td>"+tabl[i].ref +"</td>"+
        "<td>"+tabl[i].couleur +"</td>"+
        "<td>"+tabl[i].poids +"</td>"+
        "<td><button type=\"button\" class=\"supp\"> Supprimmer </button></td></tr>";

    };
    caseTableau.innerHTML = temp;
    clickSupprimmer();
  };

  /**
   * la fonction permmet de recuperer l'evenement du click sur le bouton supprimer
   * @alias bizOnline.clickSupprimmer
   * @return {undefined} le fonction ne retourne rien
   */
  const clickSupprimmer = function(){
    var supp = document.querySelectorAll('.supp');
    for (var i = 0; i < supp.length; i++) {
     supp[i].onclick = supprimmerArticle;
   };

  };

  /**
   * la fonction permmet de supprimer la ligne du tableau selectionné
   et rappel la fonction ajouter du tableau pour lettre a jour le tableau
   * @alias bizOnline.supprimmerArticle
   * @return {undefined} le fonction ne retourne rien
   */

  const supprimmerArticle = function(e){
    var source = e.target || e.srcElement;
    var numb =source.parentNode.parentNode.firstChild.textContent;
    console.log(numb);
    if (confirm("Confirmer votre choix")){
    tabl.splice(numb-1, 1);
        ajouter();
    };


  };


  window.onload = function init(){

    var valider = document.getElementById('valider');
    valider.onclick = creerProduit;

  };


}());
