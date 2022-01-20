/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar 
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#agregar').onclick = function(event) {
    crearIntegrante();
}

document.querySelector('#eliminar').onclick = function(event) {
    borrarIntegrantesAnteriores();
}

document.querySelector('#calcular').onclick = function(event) {
    const salarios = obtenerSalarios()
        
    document.querySelector('#promedioAnual').textContent = calcularPromedio(salarios)
    document.querySelector('#mayorAnual').textContent = calcularMayor(salarios)
    document.querySelector('#menorAnual').textContent = calcularMenor(salarios)
    document.querySelector('#promedioMensual').textContent = calcularPromedioMensual(salarios)
    
    mostrar('#totales')
}

document.querySelector('#resetear').onclick = resetear;

function obtenerSalarios(){
    const $salariosObtenidas = document.querySelectorAll('.salarios')
    let salariosObtenidos = []
  
    for (let i=0;i < $salariosObtenidas.length;i++){
        salariosObtenidos.push(Number($salariosObtenidas[i].value))
    }
  
    return salariosObtenidos
}


function crearIntegrante() {
    let indice = document.querySelectorAll('#integrantes .integrante').length    
    
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Ingrese Salario anual del Integrante # ' + (indice + 1) + ' ' ;
    $label.id = 'textoIntegrante ' + (indice + 1)
    
    const $salarioAnual = document.createElement('input');
    $salarioAnual.type = 'number';
    $salarioAnual.className = 'salarios'
    $salarioAnual.id = 'salarioAnualIntegrante' + (indice + 1)

    $div.appendChild($label);
    $div.appendChild($salarioAnual);
      
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function borrarIntegrantesAnteriores() {
    const $integrante = document.querySelectorAll('.integrante');
    $integrante[$integrante.length - 1].remove();
}

function borrarTodosLosIntegrantes() {
    const $integrante = document.querySelectorAll('.integrante');
    for (let i = 0; i<$integrante.length;i++){
        $integrante[i].remove();
    }
    
}

function calcularPromedio (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += Number(numeros[i])
    }
    return (acumulador / numeros.length).toFixed(2)
}

function calcularPromedioMensual (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += Number(numeros[i]) / 12
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

function mostrar(selector) {
    document.querySelector(selector).style.display = ''
}

function ocultar(selector) {
    document.querySelector(selector).style.display = 'none'
}

function resetear() {
    borrarTodosLosIntegrantes()
    ocultar('#totales')
}