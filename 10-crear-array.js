/**
 * Crear un array de longitud N on els seus elements
 *  siguin nombres de 1 fins a N
 */

let longitud = 8;
function crearArray(n){
    let resultat = []; //array on guardem

    for (let i = 1; i <= n; i++) { //de 1 a n
        resultat.push(i); //afegim el valor actual al array
    }
    return resultat;
}
let resultat = crearArray(longitud);

console.log(resultat);


/* ALTERNATIVA (Array.form)
-------------------------
function crearArray(n) {
    return Array.from({ length: n }, function(_, i) {    //on posa n son les posicions i despres de function, _ no ens interesa el valor, i "i" seria l'index (comença a 0)
        return i + 1;
    });
}
let longitud = 8;

let resultat = crearArray(longitud);

console.log(resultat);
*/
