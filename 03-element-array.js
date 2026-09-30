/**
 * Exercici 3: Validar que l'índex no sigui menor a zero
 * i que l'element existeixi dins de l'array
 */

function getByIdx(arr,idx){

    if (idx < 0 || idx >= arr.length) {     // un index no pot ser menor que 0 i tampoc pot ser igual o superior a la longitud de l'array (.lenght).
        return "L'index no és vàlid."
    } else { //com si es possible, retornem el valor del index indicat
        return arr[idx];
    }
}

let resultat = getByIdx([1,2],1);
console.log(resultat);

/* ALTERNATIVA
---------------
function getByIdx(arr, idx) {
    if (idx >= 0 && idx < arr.length) { //simplement a la inversa, comprovar directamente si SI existeix
        return arr[idx];
    }
    return "L'índex no és vàlid.";
}

let resultat = getByIdx([1, 2], 1);
console.log(resultat);

*/
