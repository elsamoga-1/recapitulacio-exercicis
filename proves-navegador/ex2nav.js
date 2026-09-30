/**
 * Exercici 2:
 * Donada una amplada i una altura,
 * retornar el nom de la resolució.
 */

function nomResolucio(amplada, altura) {

    let nom;

    if (amplada == 7680 && altura == 4320) {
        nom = "8K";
    } else if (amplada == 3840 && altura == 2160) {
        nom = "4K";
    } else if (amplada == 2560 && altura == 1440) {
        nom = "WQHD";
    } else if (amplada == 1920 && altura == 1080) {
        nom = "FHD";
    } else if (amplada == 1280 && altura == 720) {
        nom = "HD";
    } else {
        nom = "No es reconeix la resolució.";
    }

    return nom;
}

let amplada = Number(window.prompt("Introdueix l'amplada:"));
let altura = Number(window.prompt("Introdueix l'altura:"));

let nom = nomResolucio(amplada, altura);

document.writeln("La resolució és: " + nom);
