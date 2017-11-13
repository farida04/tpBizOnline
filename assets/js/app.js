const bizOnline = (function (){

  var tabl = [];

  var Produit = function (n, p, d, r){
    this.nom= n;
    this.prix= p;
    this.description= d;
    this.ref= r;

  };

  const refAleatoire  = function(){
    let chiffreAleatoire;
    let tablLettre = ["A", "B", "C", "D", "E"];
    let choixLettre = Math.floor(Math.random()*5);
    let ref = tablLettre[choixLettre];
    let ajout = document.getElementById('resultRef');

    for (var i = 0; i < 5; i++) {
      chiffreAleatoire = Math.floor(Math.random()*9);
      ref += chiffreAleatoire;
    };
    ajout.innerHTML = ref;
    return ref;
  };

  const creerProduit = function(){
    var nom = document.getElementById('nom').value;
    var prix = document.getElementById('prix').value;
    var description = document.getElementById('description').value;
    var btnRef = document.getElementById('ref');
    console.log(description);
    var ref = refAleatoire();
    btnRef.onclick = refAleatoire;
    console.log(ref);
    tabl.push(new Produit(nom, prix, description, ref));
    console.log(tabl);

    return tabl;
  };

  const ajouter = function(){
    var caseTableau = document.getElementById('tbody');
    caseTableau.innerHTML = <tr>

  };

  window.onload = function init(){
    var valider = document.getElementById('valider');
    // valider.



    // btnRef.onclick = refAleatoire;
    valider.onclick = creerProduit;






  };


}());
