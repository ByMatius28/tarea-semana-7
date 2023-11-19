//Desarrollar una función que realice la multiplicación utilizando únicamente sumas. La función 
//recibe como parámetros el multiplicador y el multiplicando, utiliza un bucle para realizar 
//sumas sucesivas y devolver el resultado

'use strict'
function multiplicar(multiplicador,multiplicando){
    let suma = 0;

    for (let i=0; i < multiplicador; i++){
        suma = suma +multiplicando;
    }

    return suma;

}
let multiplicando =  Number(prompt("Ingrese el multiplicador"));
let multiplicador = Number(prompt("Ingrese el multiplicando"));

let resultado = multiplicar(multiplicador,multiplicando);
alert(resultado);
alert("Fin de programa 2")