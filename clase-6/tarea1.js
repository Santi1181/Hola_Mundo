/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).

*/

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
  
    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
  
    event.preventDefault();
}

function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
      mostrar('#calcular');
    } else {
      resetear();
    }
  
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearIntegrante(i);
    }
  }

function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Ingrese la edad de Integrante # ' + (indice + 1);
    $label.id = 'textoIntegrante' + (indice + 1)
    const $edad = document.createElement('input');
    $edad.type = 'number';
    $edad.className = 'edades'
    $edad.id = 'edadIntegrante' + (indice + 1)

    $div.appendChild($label);
    $div.appendChild($edad);
      
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

document.querySelector('#calcular').onclick = function(event) {
    const edades = obtenerEdades()
        
    document.querySelector('#promedio').textContent = calcularPromedio(edades)
    document.querySelector('#mayor').textContent = calcularMayor(edades)
    document.querySelector('#menor').textContent = calcularMenor(edades)
    
    mostrar('#totales')
}

function obtenerEdades(){
    const $edadesObtenidas = document.querySelectorAll('.edades')
    let edadesObtenidas = []
  
    for (let i=0;i < $edadesObtenidas.length;i++){
        edadesObtenidas.push($edadesObtenidas[i].value)
    }
  
    return edadesObtenidas
  }


document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
    const $integrante = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrante.length; i++) {
      $integrante[i].remove();
    }
}
  
function resetear() {
    borrarIntegrantesAnteriores()
    ocultar('#calcular')
    ocultar('#totales')
}
  
function ocultar(selector) {
    document.querySelector(selector).style.display = 'none'
}
  
function mostrar(selector) {
    document.querySelector(selector).style.display = ''
}
  
function calcularPromedio (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += Number(numeros[i])
    }
    return (acumulador / numeros.length).toFixed(2)
}

function calcularMenor (numeros){
    let menor = numeros[0]
    for (let i=0;i<numeros.length;i++){
        if (numeros[i] < menor)  {
            menor = numeros[i]
        } 
    }
    return menor
}

function calcularMayor (numeros){
    let mayor = numeros[0]
    for (let i=0;i<numeros.length;i++){
        if (numeros[i] > mayor)  {
            mayor = numeros[i]
        } 
    }
    return mayor
}
