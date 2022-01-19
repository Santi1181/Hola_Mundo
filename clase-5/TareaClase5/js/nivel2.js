// Nivel 2

/*
    Introducción
    ============

    ¡Bienvenido al nivel 2! Es tiempo de interactuar con HTML.

    Los archivos Hyper Text Markup Language (HTML) son la columna vertebral de Internet.
    Cada sitio web que visita se carga primero como un archivo HTML.

    No hablaremos demasiado sobre HTML hoy. Lo que necesitas saber es que los archivos HTML
    funcionan como una especie de esqueleto para tu página. Nuestro archivo index.html
    combina todos los archivos de este proyecto para que puedas abrirlos en tu navegador web.

    Este proyecto tiene un archivo llamado index.html. Al final de index.html usted
    verá la siguiente etiqueta:

    <script src="js/nivel1.js"></script>

    Así es como has estado ejecutando el archivo nivel1.js en un navegador. Ahora cambia
     nivel1.js para apuntar a este archivo - nivel2.js.

    ¡Ahora estás listo para comenzar!
*/

/*
    Arrays
    ======

    Un array es una lista ordenada de valores. Podes guardar cualquier cantidad de valores
    dentro. Y también cualquier tipo de valores: números, cadenas, objetos, incluso
    otros Arrays.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let numeros = [1, 2, 8, 19];
*/

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas
//       cosas que te gustan.







/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    '.length'

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.






/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando 'notación de corchetes'. Gracias a un tipo llamado Edsger
    Dijkstra *, los índices del array se comienzan a contar desde 0. El uso se ve así.

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];
    let segundoItem = cosasAleatorias[1]; y así sucesivamente

    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.






/*
    Cambio de Valores en Arrays
    =========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // reemplacemos 'perro' con 'pez'
    animales[1] = 'pez';

    // ahora nuestro array de animales sera ['gato', 'pez', 'caballo'];
*/

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.






// TAREA: console.log todo el array para verificar.






// TIP: ¡No te olvides que las posiciones de índice comienzan desde 0!

/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');

    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.






// TAREA: console.log todo el array para verificar.






/*
    Nota acerca Arrays constantes
    =============================

    Un array es lo que se conoce como un "tipo de referencia". Lo que esto significa es que
    incluso si un array se declara (crea) usando 'const', los valores *dentro* del
    array todavía se pueden cambiar; el array en sí no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // Esto es legal y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');


    // Esto es ilegal y devolverá un error igual al que se genera al cambiar cualquier constante:
    animales = [ 'mouse', 'elephant' ];
 */

// TAREA: Intenta crear un array como una constante y modifica los valores que contiene.







// TAREA: Observa lo que sucede si agregas algo con.push(), cambias algo
//       con notación de corchetes (array[1]) y
//       asigna un nuevo array completamente nuevo a la constante






/*
    Bucles
    ======
    
    ¡La gente siempre ha sido perezosa, pero a veces avanza! A nosotros
    no nos gusta repetir las mismas aburridas acciones una y otra vez, 
    así que buscamos formas de evitarlo.

    La programación es igual. Por ejemplo, si quiero imprimir 10 veces 'JavaScript 
    es increible!', ¿cuáles son mis opciones?. Por supuesto, puedo escribir 
    diez líneas de código repitiendo la misma instrucción, pero también 
    puedo decirle a la computadora que lo repita en lugar de que yo lo escriba 10 veces.

    Para esto usamos bucles.

    Cada ciclo debe tener tres cosas principales:
     - un punto de partida
     - una condición (punto final)
     - un contador (un paso)

     Si te olvidas uno de estos, ¡podes entrar en un bucle infinito!

     Veamos diferentes estructuras de bucle.

*/

/*
    Bucles while (mientras)
    ============

    El bucle 'While' hará una acción para siempre hasta que se cumpla alguna condición.

    Ejemplo:

    // punto de partida
    let numero = 0;

    while (numero < 10) {
      // 'menos de 10' es una condición (punto final)

      console.log('JavaScript es increíble!');

      numero = numero + 1;
      // + 1 es un contador / tamaño del paso
    }
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.






/*
    Bucles for (para)
    ==========

    Los bucles for son muy similares al 'bucle while'. En un bucle for
    se declara un contador en la declaración.

    Ejemplo:

    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (punto de partida; condicion; paso)
      console.log('Hola!');
    }
*/

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.






/*
    Iterando a traves de Arrays
    ===========================

    Ahora que conocemos los bucles, vamos a usar cada valor de mi lista de animales
    y expresar mi amor por cada uno ¿Cómo lo voy a hacer?

    Podemos usar un 'bucle for' para iterar a través de nuestro array y obtener cada valor
    de eso.

    Nota: i++ es otra forma de expresar i = i + 1.

    Ejemplo:

    const animales = ['gatos', 'perros', 'caballos'];

    for(let i = 0; i < animales.length; i++){
        console.log('Me gustan los ' + animales[i]); //animales[i] se lee "animales en i"
    }
*/

// TAREA: Probalo con tu comidasFavoritas array.






/*
    Bucles y Logica
    ===============
    
    Traigamos bucles junto con las declaraciones if / else que aprendimos en
    nivel 1, y hagamos algo interesante.


    Contemos de 10 a 0 e imprimamos todos los números. Pero cuando lleguemos al
    medio (5) imprimimos 'Estamos en el medio!'.

    Ejemplo:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('Estamos en el medio!');
        } else {
            console.log(i);
        }
    }
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.

// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
//
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

/*
for (let i = 1 ; i <= 50 ; i++ ){
    const CERO = 0
    const CINCO = 5
    const TRES = 3
    if ( i % TRES === CERO && i % CINCO === CERO) {
        console.log('FizzBuzz')
    } else if (i % CINCO === CERO) {
        console.log('Buzz')
    } else if  (i % TRES === CERO) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
}
*/

///////////////////////////////////////////////// Desafios Programación:
//Desafío de programación #1: Imprimí los números del 1 al 10
//Resultado: 10 9 8 7 6 5 4 3 2 1
/*
let resultado = []

for (let i=10;i>0;i--){
    resultado.push(i)
}

console.log(resultado)
*/
/*
//Desafìo de programación #2: Imprimí los números impares del 1 al 100
// 1 3 5 ... 99

let resultado = []

function esImpar(numero) { 
    return numero % 2 === 1
}

for (let i=1;i<=100;i++){
    if (esImpar(i) === true){
        resultado.push(i) 
    }
}

console.log(resultado)
*/
/*
//Desafío de programación #3: Imprimí la tabla de multiplicación del 7
// 7x0 = 0
// 7x1 = 7
// ...
// 7x9 = 63

for (i=0;i<=10;i++){
    const SIETE = 7
    console.log(`${SIETE}x${i} = `+ (SIETE * i))
}

*/
/*
//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
//1x0 = 0
// ...
// 1x9 = 9
// 2x0 = 0
// ...
// 2x9 = 18
// ...
// ...
// 9x9 = 81
//

for (i=1;i<=9;i++){
    const DIEZ = 10
    let numerador = 0
    while (numerador <= DIEZ) {
        console.log(i + 'x' + numerador + '= ' + (i*numerador))
        numerador = numerador + 1
    }    
}
*/
/*
//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
// [1,2,3,4,5,6,7,8,9,10]
// 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
// Desafío de programación #10: Calcula la suma de todos los números en un array de números

let numeros = []
let resultado = 0

function sumar (numeros){
    for (let i=0;i<numeros.length;i++){
        resultado += numeros[i]
    }
        
    return resultado
}

for (let i=1;i<=10;i++){
    numeros.push(i)    
}

console.log(`El resultado de la suma de ${numeros} es igual a ${sumar(numeros)}`)
*/
/*
//Desafío de programación #6: Calcula 10! (10 factorial)

let resultado = 1
let numeroAProcesarFactorial = Number(prompt('Ingrese un numero sobre el que quiere calcular el factorial: '))

if ( !isNaN(numeroAProcesarFactorial)){
    for (i=1;i<=numeroAProcesarFactorial;i++){
        resultado *= i
    }
    console.log(`El factorial del número ${numeroAProcesarFactorial} es: ${resultado}` )
} else {
    alert('Debe ingresar un número')
}
*/

/*
//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let resultado = 0
let numerosImpares = []

function validarParImpar (numero){
    return numero % 2
}

for (let i=10;i<=30;i++){
    if (validarParImpar(i) === 1){
        resultado += i
        numerosImpares.push(i)                
    }
}

console.log(`La suma de los números impares del 10 al 30 es la siguiente: ${resultado}. Los números impares fueron: ${numerosImpares}`)
*/

/*
//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius


function convertirTemperatura (indicador,numero){
    if (indicador === 'f'){
        return ((numero - 32) * 5/9)
    } else {
        return ((numero * 9/5) + 32)
    }
}

let indicadorAConvertir = prompt('Ingrese que desea convertir? (Fahrenheit o Celsius). Ingrese la primera letra').toLowerCase()
let tempACalcular = Number(prompt('Ingrese ahora el valor de la temperatura a convertir: '))

if (indicadorAConvertir === 'f' ){
    console.log(`Usted desea pasar de Fahrenheit a Celcius. Ingreso ${tempACalcular}ºF que son ${convertirTemperatura(indicadorAConvertir,tempACalcular)}ºC`)
} else if (indicadorAConvertir === 'c'){
    console.log(`Usted desea pasar de Celcius a Fahrenheit. Ingreso ${tempACalcular}ºC que son ${convertirTemperatura(indicadorAConvertir,tempACalcular)}ºF`)
} else {
    alert('Debe ingresar un valor de los solicitados para realizar la conversión: F o C')
}

*/
/*
//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
let numeros = []

function calcularPromedio (numeros){
    let resultado = 0
    for (let i=0;i<numeros.length;i++){
        resultado += numeros[i]
    }
    return resultado / numeros.length
}

for (let i=1;i<=10;i++){
    numeros.push(i)
}

console.log(`El promedio de la suma de los siguientes numeros ${numeros} es = ${calcularPromedio(numeros)}`)
*/
/*
//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
let numeros = []

for (let i=-5;i<=5;i++){
    numeros.push(i)
}

function filtrarNumerosPositivos (numeros) {
    let numerosPositivos = []
   
    for (let i=0;i<numeros.length;i++){
        if (numeros[i] > 0){
            numerosPositivos.push(numeros[i])
        }
    }
    return numerosPositivos
}

console.log(`Los numeros positivos son los siguientes: ${filtrarNumerosPositivos(numeros)}. La lísta original tenía los siguientes valores: ${numeros} `)
*/
/*
//Desafío de programación #13: Find the maximum number in an array of numbers

let numeros = []
let numeroMayor = 0

for (let i=-5;i<=5;i++){
    numeros.push(i)
}

function obtenerMayor(numeros){
    for (let i=0;i<numeros.length;i++){
        if (numeros[i]>numeroMayor){
            numeroMayor = numeros[i]
        }
    }    
    return numeroMayor
}

console.log(`Dentro de la siguiente lista de números ${numeros}, este es el mayor ${obtenerMayor(numeros)}`)
*/

/*
//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
//Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
//El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let fibonacci = [0,1]
let resultado = 0

for (let i = 0; i < 9; i++){
    resultado = fibonacci[i] + fibonacci[i+1]
    fibonacci.push(resultado)
}

console.log(fibonacci)

*/
/*
//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

let fibonacci = [0,1]
let resultado = 0

let ordenAObtenerFibonacci = Number(prompt('Ingrese la posición de Fibonacci que quiere obtener'))

for (let i = 0; i < ordenAObtenerFibonacci; i++){
    resultado = fibonacci[i] + fibonacci[i+1]
    fibonacci.push(resultado)
}

console.log(`El valor de la posición solicitada de la sucesión de Fibonacci es la siguiente:  ${fibonacci[ordenAObtenerFibonacci-1]}`)
*/

/*
//Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function esPrimo(numero){
    for (let i = 2;i<numero;i++){
        if (numero % i === 0){
            return false
        }
    } return true
}

let numeroAValidar = Number(prompt('Ingrese un numero para validar si es primo: '))

if (!isNaN(numeroAValidar)){
    if (esPrimo(numeroAValidar) === true){
        console.log(`El número ${numeroAValidar} es PRIMO`)
    } else {
        console.log(`El número ${numeroAValidar} NO es PRIMO`)
    }
} else {
    alert('Debe ingresar un número')
}
*/

/*
//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
//Ejemplo:
//   123 = 1 + 2 + 3 = 6
//   2 = 2
//   1234 = 1 + 2 + 3 + 4 = 10

let numeroAProcesar = Number(prompt('Ingrese un numero: '))

function sumarCaracteresNumeroEntero (numero){
    let numeroATexto = numero.toString()
    let resultadoSuma = 0
    for (let i = 0;i<numeroATexto.length;i++){
        resultadoSuma += Number(numeroATexto[i])
    }
    return resultadoSuma
}

console.log(`Esta es la suma del numero entero ingresado: ${sumarCaracteresNumeroEntero(numeroAProcesar)}. El número ingresado fue: ${numeroAProcesar}`)
*/

/*
//Desafío de programación #18: Imprimir los primeros 100 números primos

let listaNumerosPrimos = []

for (let i=1;i<100;i++){
    if (esPrimo(i) === true){
        listaNumerosPrimos.push(i)
    }
}

function esPrimo(numero){
    for (let i = 2;i<numero;i++){
        if (numero % i === 0){
            return false
        }
    } return true
}

console.log(`Estos son los primeros 100 números primos:  ${listaNumerosPrimos}`)
*/

/*
//Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
//Ejemplo:
//  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

const numerosAMostrar = Number(prompt('Cuantos números primos quiere mostrar?: '))
const numeroAPartirDeDonde = Number(prompt('A partir de que número quiere obtener los números primos?: '))
let numeroATratar = numeroAPartirDeDonde
let limite = 0 
let listaNumerosPrimosObtenidos = []

function esPrimo(numero){
    for (let i = 2;i<numero;i++){
        if (numero % i === 0){
            return false
        }
    } return true
}

while (limite < numerosAMostrar){
        if (esPrimo(numeroATratar) === true){
        listaNumerosPrimosObtenidos.push(numeroATratar)
        numeroATratar += 1
        limite += 1
    } else {
        numeroATratar += 1
    }
}

console.log(`Estos son los ${numerosAMostrar} números primos, a partir del ${numeroAPartirDeDonde}: ${listaNumerosPrimosObtenidos}`)
*/

/*
//Desafío de programación #20: Rotar un array hacia la izquierda una posición
//Ejemplo:
//  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
//  [5] debería quedar como [5]
//  [4,3,2,1] debería quedar como [3,2,1,4]

let listaNumeros1 = [9,1,2,3,4]
let listaNumeros2 = [5]
let listaNumeros3 = [4,3,2,1]

function rotarListaIzquierda(lista){
    let listaNumerosModificada = []
    for (let i=1;i<lista.length;i++){
        listaNumerosModificada.push(lista[i])        
    } 
    listaNumerosModificada.push(lista[0])
    return listaNumerosModificada
}

console.log(`Listas cargadas: ${listaNumeros1} / ${listaNumeros2} / ${listaNumeros3}. Las mismas respectivamente quedaron de la siguiente forma luego de rotar una posición a la izquierda: ${rotarListaIzquierda(listaNumeros1)} / ${rotarListaIzquierda(listaNumeros2)} / ${rotarListaIzquierda(listaNumeros3)}`)
*/

/*
//Desafío de programación #21: Rotar un array a la derecha una posición
//Ejemplo:
//  [2,3,4,1] debería quedar como [1,2,3,4]
//  [2,3] debería quedar como [3,2]

let listaNumeros1 = [2,3,4,1]
let listaNumeros2 = [2,3]

function rotarListaDerecha(lista){
    let listaNumerosModificada = []
    for (let i=0;i<lista.length-1;i++){
        if (i === 0){
            listaNumerosModificada.push(lista[lista.length - 1])        
        } 
        listaNumerosModificada.push(lista[i])
    } 
    return listaNumerosModificada
}

console.log(`Listas cargadas: ${listaNumeros1} / ${listaNumeros2}. Las mismas respectivamente quedaron de la siguiente forma luego de rotar una posición a la derecha: ${rotarListaDerecha(listaNumeros1)} / ${rotarListaDerecha(listaNumeros2)} `)
*/

/*
//Desafío de programación #22: Invertir un array
//Ejemplo:
//  [1,2,3,4] debería quedar como [4,3,2,1]
//  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
//  [5,6,3] debería quedar como [3,6,5]

let listaNumeros1 = [1,2,3,4]
let listaNumeros2 = [6,5,4,3,2,1]
let listaNumeros3 = [5,6,3]

function invertirLista(lista){
    let listaNumerosModificada = []
    for (let i=lista.length - 1;i>=0;i--){
        listaNumerosModificada.push(lista[i])
    } 
    return listaNumerosModificada
}

console.log(`Listas cargadas: ${listaNumeros1} / ${listaNumeros2} / ${listaNumeros3}. Las mismas respectivamente quedaron de la siguiente forma luego de invertirlas: ${invertirLista(listaNumeros1)} / ${invertirLista(listaNumeros2)} / ${invertirLista(listaNumeros3)}`)
*/

/*
//Desafío de programación #23: Invertir una cadena de caracteres
//Ejemplo:
//  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
//  "bienvenido" debería quedar como "odinevneib"

let cadenaCaracteres = "dabale arroz a la zorra el abad"
let cadenaCaracteres2 = "bienvenido"

function invertirCadenaCaracteres(caracteres){
    let cadenaCaracteresInvertida = ""
    for (let i=caracteres.length;i>=0;i--){
        cadenaCaracteresInvertida += caracteres.charAt(i)
    } 
    return cadenaCaracteresInvertida
}

console.log(`Las cadenas de caracteres cargadas fueron: ${cadenaCaracteres} / ${cadenaCaracteres2}. Las mismas quedaron de la siguiente forma luego de invertirlas: ${invertirCadenaCaracteres(cadenaCaracteres)} / ${invertirCadenaCaracteres(cadenaCaracteres2)} `)
*/

/*
//Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
//Ejemplo:
//  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

let listaNumeros = [1,2,3]
let listaCaracteres = ["a","b","c"]

function unificarListas(lista1,lista2){
    let listaUnificada = []
    for (let i=0;i<lista1.length;i++){
        listaUnificada.push(lista1[i])
    } 
    for (let i=0;i<lista2.length;i++){
        listaUnificada.push(lista2[i])
    } 
    return listaUnificada
}

console.log(`Las listas cargadas fueron: ${listaNumeros} / ${listaCaracteres}. Las mismas unificadas quedaron de la siguiente forma: ${unificarListas(listaNumeros,listaCaracteres)} `)
*/

/*
//Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y 
//retorne un array con números que estén en uno u otro array, pero NO en ambos.
//Nota: Esto se llama "diferencia simétrica" entre conjuntos
//Ejemplo:
//  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
//  [5,10,3] y [10,1] debería quedar como [5,3,1]

let listaNumeros1 = [1,2,3]
let listaNumeros2 = [3,7,11]

function filtrarUnicos(lista1,lista2){
    let listaUnicos = []

    for (let i=0;i<lista1.length;i++){
        if (lista2.indexOf(lista1[i]) === -1){
            listaUnicos.push(lista1[i])
        }
    } 
    for (let i=0;i<lista2.length;i++){
        if (lista1.indexOf(lista2[i]) === -1){
            listaUnicos.push(lista2[i])
        }
    } 
    return listaUnicos
}

console.log(`Listas cargadas: ${listaNumeros1} / ${listaNumeros2} . La siguiente sería la lista de caracteres unicos: ${filtrarUnicos(listaNumeros1,listaNumeros2)} `)
*/

/*
//Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne 
//un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
//Nota; Esto se llama "resta" entre conjuntos
//Ejemplo:
//  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

let listaNumeros1 = [5,1,2,3,4]
let listaNumeros2 = [3,4]

function filtrarUnicosUnaLista(lista1,lista2){
    let listaUnicos = []

    for (let i=0;i<lista1.length;i++){
        if (lista2.indexOf(lista1[i]) === -1){
            listaUnicos.push(lista1[i])
        }
    } 
    return listaUnicos
}

console.log(`Listas cargadas: ${listaNumeros1} / ${listaNumeros2} . La siguiente sería la lista de caracteres que solo se encuentran en la primera lista: ${filtrarUnicosUnaLista(listaNumeros1,listaNumeros2)} `)
*/

/*
//Desafío de programación #27: Crear una función que reciba un array de números como argumento y 
//retorne un array con los elementos distintos
//Ejemplo:
//   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

let listaNumeros1 = [1,2,3,4,5,4,3,2,1,0]

function filtrarDuplicados(lista){
    let listaUnicos = []

    for (let i=0;i<lista.length;i++){
        if (listaUnicos.includes(lista[i]) === false){
            listaUnicos.push(lista[i])
        }
    } 
    return listaUnicos
}

console.log(`Lista cargada: ${listaNumeros1}. La siguiente sería la lista de caracteres sin duplicados: ${filtrarDuplicados(listaNumeros1)} `)

*/
//////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 2 de JavaScript Básico!            //
// Levántate, estira las piernas y celebra tu logro.                        //
// El siguiente paso será seguir las instrucciones en el archivo nivel3.js. //
//////////////////////////////////////////////////////////////////////////////



