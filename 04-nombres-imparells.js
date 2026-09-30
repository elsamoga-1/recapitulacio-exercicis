// Exercici 4: Imprimir només els nombres imparells del 0 al 10
// Sortida:
// imparell 1
// imparell 3
// imparell 5
// imparell 7
// imparell 9

for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) { // % retorna el residu d'una divisió, si un nombre entre 2 deixa residu 1, significa que és imparell
        console.log("imparell", i);
    }
}

/* ALTERNATIVA
---------------
for (let i = 1; i <= 10; i += 2) {    //podem començar directament desde 1 i anar sumant de 2 en 2 i ja
    console.log("imparell", i);
}
*/
