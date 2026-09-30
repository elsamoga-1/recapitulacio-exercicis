/**
 * Exercici 7:
 *  Crear un algoritme que retorni el preu del producte més impostos
 *
 */

function preuComplet(preu, impost){

    return (preu + (preu * impost)).toFixed(2); //toFixed mostra decimals (2 pq es un preu)
}
let resultat = preuComplet(19.90,0.15);
console.log(resultat);


/* ALTERNATIVA
---------------
function preuComplet(preu, impost) {   //mes entenible visiblement

    let impostos = preu * impost;
    let preuFinal = preu + impostos;

    return preuFinal.toFixed(2);
}
let resultat = preuComplet(19.90,0.15);
console.log(resultat);

*/
