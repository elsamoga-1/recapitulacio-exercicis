/**
 * Exercici 5:
 * Crear un algoritme que retorni el nombre major i menor d'un array
 * NOTA: Exercici típic de prova tècnica en entrevistes de feina
 */

let array =[2,5,7,15,-5,-100,55];

function getMenorMajor(arr){
    let menor = arr[0];  //comencem fent com si el primer valor es el menor
    let major = arr[0]; //tmb com si ho fos el major

    for (let i = 1; i < arr.length; i++) {  //comencem pel 2n valor pq el 1r ja ho hem inicialitzat abans al menor i major

        if (arr[i] < menor) { //si trobem un + petit actualitzem
            menor = arr[i];
        }

        if (arr[i] > major) { //si trobem un + gran actualitzem
            major = arr[i];
        }
    }
    //return [menor, major]; UNA MANERA = PARA OBJETOS / array
    return "menor: " + menor + ", major: " + major;
}
let nombres =getMenorMajor(array);
console.log(nombres);


/* ALTERNATIVA (Math.min() i Math.max())
----------------------------------------
function getMenorMajor(arr) {

    let menor = Math.min(...arr);      //...arr permet pasar TOTS ELS ELEMENTS DEL ARRAY a Math.x...      TOOOOOOOP
    let major = Math.max(...arr);

    return [menor, major];
}

let nombres = getMenorMajor(array);
console.log(nombres);

*/
