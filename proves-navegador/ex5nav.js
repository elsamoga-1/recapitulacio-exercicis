/**
 * Exercici 5:
 * Trobar el nombre menor i el nombre major d'un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMajor(arr) {

    let menor = arr[0];
    let major = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < menor) {
            menor = arr[i];
        }

        if (arr[i] > major) {
            major = arr[i];
        }
    }

    return "menor: " + menor + ", major: " + major;
}

let nombres = getMenorMajor(array);

document.writeln(nombres);
