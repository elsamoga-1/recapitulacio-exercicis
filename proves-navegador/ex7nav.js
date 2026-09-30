/**
 * Exercici 7:
 * Crear un algoritme que retorni el preu del producte més impostos.
 */

function preuComplet(preu, impost) {

    return (preu + (preu * impost)).toFixed(2);
}

let preu = Number(window.prompt("Introdueix el preu del producte:"));

let impost = Number(window.prompt("Introdueix l'impost en decimal (ex: 0.15):"));

let resultat = preuComplet(preu, impost);

document.writeln("El preu final és: " + resultat + " €");
