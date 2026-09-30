// Exercici 1: completa l'estructura següent perquè funcioni el programa
// i indiqui quin és el major dels dos nombres.
// dos nombres
function quinEsMajor(a,b){
    let major;
    if (a > b) { //comprovem que a sigui major que b
        major = a;
    } else { // si no, b es mes gran o son iguals
        major = b;
    }
    return major; // retorna el + gran
}
let major = quinEsMajor(10,5);

console.log(major);


/* ALTERNATIVA (operador terenari)
----------------------------------
function quinEsMajor(a, b) {
    return a > b ? a : b;     //si a es + gran que b, retornem a. Si no, retornem b.  (condició ? valorSiCert : valorSiFals)
}

let major = quinEsMajor(10, 5);

console.log(major);
*/


