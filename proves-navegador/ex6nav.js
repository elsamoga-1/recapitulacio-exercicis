/**
 * Exercici 6:
 * Comptar quants nombres positius hi ha en un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function quantsPositius(arr) {

    let positius = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            positius++;
        }
    }

    return positius;
}

let resultat = quantsPositius(array);

document.writeln("Hi ha " + resultat + " nombres positius.");
