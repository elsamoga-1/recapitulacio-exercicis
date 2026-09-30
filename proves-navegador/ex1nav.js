/**
 * Exercici 1:
 * Retornar el major de dos nombres.
 */

function quinEsMajor(a, b) {
    let major;

    if (a > b) {
        major = a;
    } else {
        major = b;
    }

    return major;
}

// Demanem els nombres a l'usuari
let a = Number(window.prompt("Introdueix el primer nombre:"));
let b = Number(window.prompt("Introdueix el segon nombre:"));

// Cridem la funció
let major = quinEsMajor(a, b);

// Mostrem el resultat
document.writeln("El nombre major és: " + major);
