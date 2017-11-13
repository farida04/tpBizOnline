const bizOnline = (function (){

  var tabl = [];

  var Produit = function (n, p, d, r){
    this.nom= n,
    this.prix= p,
    this.description= d,
    this.ref= r

  };

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

  const creerProduit = function(){
    var nom = document.getElementById('nom').value;
    var prix = document.getElementById('prix').value;
    var description = document.getElementById('description').value;
    var ref = refAleatoire();
    tabl.push(new Produit(nom, prix, description, ref));
    console.log(tabl);
    ajouter();

    return tabl;
  };

  const ajouter = function(){
    var caseTableau = document.getElementById('tbody');
    var temp = "";
    console.log(caseTableau);
    for (var i = 0; i < tabl.length; i++) {
      temp += "<tr><td>"+ tabl[i].nom + "</td>"+
      "<td>"+ tabl[i].prix + "</td>"+
      "<td>"+ tabl[i].description +"</td>"+
      "<td>"+tabl[i].ref +"</td></tr>";
    };
    caseTableau.innerHTML = temp;
  };

  window.onload = function init(){

    var valider = document.getElementById('valider');
    valider.onclick = creerProduit;







  };


}());
