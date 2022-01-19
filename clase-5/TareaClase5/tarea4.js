//TAREA: En otro archivo distinto,
//  Crear una lista de <ol> y <li> que contengan sólo números.
//  Convertir esos números a un array y:
//  1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
//  2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el 
//     texto "El número más pequeño es..."
//  3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
//  4. obtener el número que más se repite y mostrarlo en un <em> pre-creado 
//     con el texto "El número más frecuente es..."

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $numeros = document.querySelectorAll('li');

    document.querySelector('#promedio').textContent = calcularPromedio($numeros)
    document.querySelector('#menor').textContent = calcularMenor($numeros)
    document.querySelector('#mayor').textContent = calcularMayor($numeros)
    document.querySelector('#masFrecuente').textContent = obtenerMasFrecuente($numeros)

    mostrar('#totales')

    event.preventDefault();
}


function calcularPromedio (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += Number(numeros[i].innerText)
    }
    return (acumulador / numeros.length).toFixed(2)
}

function calcularMenor (numeros){
    let menor = Number(numeros[0].innerText)
    for (let i=0;i<numeros.length;i++){
        if (Number(numeros[i].innerText) < menor)  {
            menor = Number(numeros[i].innerText)
        } else {
              continue
        }
    }
    return menor
}

function calcularMayor (numeros){
    let mayor = Number(numeros[0].innerText)
    for (let i=0;i<numeros.length;i++){
        if (Number(numeros[i].innerText) > mayor)  {
            mayor = Number(numeros[i].innerText)
        } else {
              continue
        }
    }
    return mayor
}

function obtenerMasFrecuente(numeros){
    let numeroMasFrecuente;
    let contarRepeticiones;
    let contadorMaximasRepeticiones = 0;

    for(let i = 0; i < numeros.length; i++) {
        contarRepeticiones = 0;
        for(let j = 0; j < numeros.length; j++){
            if(Number(numeros[i].innerText) === Number(numeros[j].innerText)){
                contarRepeticiones++;
            }
            if(contarRepeticiones > contadorMaximasRepeticiones){
                contadorMaximasRepeticiones = contarRepeticiones;
                numeroMasFrecuente = Number(numeros[i].innerText);
            }
        }
    }
    return numeroMasFrecuente
}

function mostrar(id) {
    document.querySelector(id).style.display = ''
}