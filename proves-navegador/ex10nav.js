/**
 * Exercici 10:
 * Crear un array de longitud N on els seus elements
 * siguin nombres de 1 fins a N.
 */

let longitud = Number(window.prompt("Quants nombres vols crear?"));

function crearArray(n) {

    let resultat = [];

    for (let i = 1; i <= n; i++) {

        resultat.push(i);
    }

    return resultat;
}

let resultat = crearArray(longitud);

document.writeln("Array creat: ");
document.writeln(resultat);
