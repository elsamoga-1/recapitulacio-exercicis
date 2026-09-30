/**
 * Exercici 9: fer l'operació inversa de l'exercici 8.
 *
 *
 * [
  { name: 'John', id: 1 },
  { name: 'Doe', id: 2 },
  { name: 'Brown', id: 3 }
]
 */
let pairs = [
    [1, {  name: 'John' }],
    [2, {  name: 'Doe' }],
    [3, { name: 'Brown' }]
];

function toCollection(arr){
    let resultat = []; //array on guardarem

    for (let i = 0; i < arr.length; i++) { //recorrer  array
        resultat.push({  //crear nou objecteb i afegir al resultat
            name: arr[i][1].name,
            id: arr[i][0]
        });
    }
    return resultat;
}

let resultat = toCollection(pairs);
console.log(resultat);


/* ALTERNATIVA (map)
-------------------------
function toCollection(arr) {

    return arr.map(function(parella) {   //el map transforma tots els elements d'un array en una altre cosa (la q la segueix a continuació), osea en aquest cas la converteix en l'objecte
        return {
            name: parella[1].name,
            id: parella[0]
        };

    });
}

let resultat = toCollection(pairs);
console.log(resultat);
*/

