/**
 * Exercici 6:
 * Crear un algoritme que retorni la quantitat
 * de nombres positius d'un array
 *
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function quantsPositius(arr) {
    let positius = 0;

    for (let i = 0; i <= arr.length; i++) { //recorrem tots els elements del array
        if (arr[i] > 0) { //si el valor es + gran que 0, aumentem contador de positius
            positius++;
        }
    }
    return positius;
}
let resultat = quantsPositius(array);
console.log(resultat);

/* ALTERNATIVA (for...of)
-------------------------
function quantsPositius(arr) {
    let positius = 0;

    for (let numero of arr) {     //significa: para cada numero del array, haz lo siguiente: ... TOOOOOP

        if (numero > 0) {
            positius++;
        }
    }

    return positius;
}
let resultat = quantsPositius(array);
console.log(resultat);

*/
