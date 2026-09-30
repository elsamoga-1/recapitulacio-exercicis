/**
 * Exercici 3:
 * Retornar l'element d'un array segons el seu índex.
 */

function getByIdx(arr, idx) {

    if (idx < 0 || idx >= arr.length) {
        return "L'índex no és vàlid.";
    } else {
        return arr[idx];
    }
}

let array = [1, 2, 3, 4, 5];
let idx = Number(window.prompt("Introdueix l'índex que vols consultar (0-4):"));

let resultat = getByIdx(array, idx);

document.writeln("Resultat: " + resultat);
