// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!


function isValid(letter) {
    var validarPs = true;

    // Obtengo array de cada palabra
    var arrayPalabras = letter.split(' ');
    console.log(arrayPalabras);
    
    //bolean para  los parentesis
    
    validarPs = validarPalabras(arrayPalabras);

    //validarCarac true si contiene {} o []
    let validarCarac = arrayPalabras.some(validarCaracteres);

    console.log('Validar caracteres me da: ' + validarCarac);
    console.log('Validar parentesis me da: ' + validarPs);
    
    if(validarCarac && validarPs){
        return true;
    }else{
        return false;
    }
}

function validarPalabras(arrayPalabras){
    let b = true;
    let cantPIzquierda = 0;
    let cantPDerecha = 0;
    let cantidadLetrasConParentesis = 0;
    arrayPalabras.forEach(element => {
        if(element.charAt(0) === '('){
            if(element.charAt(element.length-1) !== ')'){
                b = false; 
            }
        }
        if(element.charAt(0) === '(' && element.charAt(element.length-1) === ')' ){
            cantidadLetrasConParentesis++;
            //Quiere decir que solo hay ()
            if(element.length === 2){
                b = false;
            }
            let letras = [...element];
            letras.forEach(l => {
                if (l === '('){
                    cantPIzquierda++;
                }else if (l === ')'){
                    cantPDerecha++;
                }

            })
        }
        if(element.charAt(0) === ')'){
            b = false;
        }
    });
    if (cantidadLetrasConParentesis !== cantPDerecha || cantidadLetrasConParentesis !== cantPIzquierda){
        b = false;
    }
    return b;
   
}

function validarCaracteres(element){
    return !element.includes('{') || !element.includes('}') || !element.includes('[') || !element.includes(']');
}


console.log(isValid(")bici( casa play"));