/**
 *  Exercici 8:
 * Crear un algoritme que donat un array d'objectes retorni un array
 * de parells [[id1,{}],[id2,{}],...]
 *  [
  [ 1, { id: 1, name: 'John' } ],
  [ 2, { id: 2, name: 'Doe' } ],
  [ 3, { id: 3, name: 'Brown' } ]
]
 *
 */

let array = [{
    id: 1,
    name: 'John',
},{
    id: 2,
    name: 'Doe',
},{
    id: 3,
    name: 'Brown',
}];
function toPairs(arr){
    let resultat = [];     //array buit on guardem el resultat

    for (let i = 0; i < arr.length; i++) { //recorre tots els objectes del array
        resultat.push([arr[i].id, arr[i]]); //PUSH per afegir element al final del array, primera posicio id i segona el objecte sencer
    }
    return resultat;
}
let resultat = toPairs(array);
console.log(resultat);



/* ALTERNATIVA (for...of)
-------------------------
function toPairs(arr) {
    let resultat = [];

    for (let objecte of arr) {   //para cada objecte del array, fes...
        resultat.push([objecte.id, objecte]);
    }
    return resultat;
}
let resultat = toPairs(array);
console.log(resultat);

*/
