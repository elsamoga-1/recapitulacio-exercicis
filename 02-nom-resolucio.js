/**
 * Exercici 2:
 *  Donada la funció següent fer que indiqui quin és el nom
 * de la resolució en funció dels paràmetres amplada i altura
 *
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD  1280 x 720
 */
function nomResolucio(amplada, altura){
    let nom;
    if (amplada == 7680 && altura == 4320){  //comprovem totes les resoluciones en funcio els parametres que indiquen en el enunciat
        nom = "8K";
    } else if (amplada == 3840 && altura == 2160){
        nom = "4k";
    } else if (amplada == 2560 && altura == 1440){
        nom = "WQHD";
    } else if (amplada == 1920 && altura == 1080){
        nom = "FHD";
    } else if (amplada == 1280 && altura == 720){
        nom = "HD";
    } else {
        nom = "No es reconeix la resolució.";
    }
    return nom;
}
let nom =nomResolucio(1366,768);
console.log(nom);

/* ALTERNATIVA
---------------
//es podria fer el return directament en cada condicio en comptes de utilitzar la variable nom, no es necessària
function nomResolucio(amplada, altura){
    if (amplada == 7680 && altura == 4320){  //comprovem totes les resoluciones en funcio els parametres que indiquen en el enunciat
        return "8K";
    //etcetc...
*/
