/**
 * Exercici 8:
 * Convertir una array d'objectes en una array de parelles.
 */

let array = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Doe',
    },
    {
        id: 3,
        name: 'Brown',
    }
];

function toPairs(arr) {

    let resultat = [];

    for (let i = 0; i < arr.length; i++) {

        resultat.push([arr[i].id, arr[i]]);
    }

    return resultat;
}

let resultat = toPairs(array);

document.writeln("<pre>");
document.writeln(JSON.stringify(resultat, null, 2));
document.writeln("</pre>");
