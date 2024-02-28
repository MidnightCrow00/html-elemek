import { SZEMELYLISTA } from "./adat.js";
import { listaKiir, listaOsszeallit, kartyabaHelyezes, tablazatbaHelyezes } from "./fuggveny.js";

console.log(SZEMELYLISTA);
/* Írd ki a második ember nevét és telefonszámát */

listaKiir(SZEMELYLISTA);

/* HTML elemek elérése - DOM elérése */
/* megfogom a div#lista elemet */
//const LISTAELEM = document.getElementById("lista")
const LISTAELEM = document.querySelector("#lista");
const KARTYA = document.querySelector("#cardContainer");
const TABLAZAT = document.querySelector("#tablazat");
console.log(LISTAELEM);

/* Módositom a tartalmát */
LISTAELEM.innerHTML = "<h3>CÍMLISTA</h3>"
LISTAELEM.innerHTML += listaOsszeallit(SZEMELYLISTA)
KARTYA.innerHTML = kartyabaHelyezes(SZEMELYLISTA);
TABLAZAT.innerHTML += tablazatbaHelyezes(SZEMELYLISTA)
