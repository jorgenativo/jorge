function nomHeroi(i){
  fetch("./JSON/superheroes.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      document.write(data.members[i].name);
  })
  .catch((error) => {
      console.error("Error al llegir l'arxiu JSON: ", error);
  })
}

function listaHeroes(){
  fetch("./JSON/superheroes.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data.members[0].powers);

      document.getElementById("super1").innerText = data.members[0].name;
      document.getElementById("power1").innerText = data.members[0].powers;

      document.getElementById("super2").innerText = data.members[1].name;
      document.getElementById("power2").innerText = data.members[1].powers;

      document.getElementById("super3").innerText = data.members[2].name;
      document.getElementById("power3").innerText = data.members[2].powers;

      novaTargeta(data);

        })
  .catch((error) => {
      console.error("Error al llegir l'arxiu JSON: ", error);
  })
}

function novaTargeta(data){
  // Creació nova targeta
  var novaTargeta = document.createElement("div");
  novaTargeta.className+= "tarjeta";
  
  var nouSuper = document.createElement("div");
  nouSuper.className+= "nomSuper";
  var nouTextSuper = document.createTextNode(data.members[0].name);
  nouSuper.appendChild(nouTextSuper); // afegeix el nom del superheroi.
  novaTargeta.appendChild(nouSuper);
  
  console.log(nouSuper);


  var currentDiv = document.getElementById("info");
  document.body.insertBefore(novaTargeta, currentDiv);
}