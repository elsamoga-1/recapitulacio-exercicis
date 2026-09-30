/**
 * Exercici 9:
 * Convertir una array de parelles en una array d'objectes.
 */

let pairs = [
    [1, { name: 'John' }],
    [2, { name: 'Doe' }],
    [3, { name: 'Brown' }]
];

function toCollection(arr) {

    let resultat = [];

    for (let i = 0; i < arr.length; i++) {

        resultat.push({
            name: arr[i][1].name,
            id: arr[i][0]
        });
    }

    return resultat;
}

let resultat = toCollection(pairs);

document.writeln("<pre>");
document.writeln(JSON.stringify(resultat, null, 2));
document.writeln("</pre>");
