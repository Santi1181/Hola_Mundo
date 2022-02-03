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

document.querySelector('#resetear').onclick = resetear;

const $formIntegrantes = document.querySelector("#tarea2-clase6");
$formIntegrantes.onsubmit = validarFormularioIntegrantes;

function validarFormularioIntegrantes(event){
    limpiarErrores()
    event.preventDefault(); 
    const $formIntegrantes = document.querySelector("#tarea2-clase6");

    const salariosObtenidos = obtenerSalarios()

    const errorSalariosIngresados = validarSalariosIngresados(salariosObtenidos)

    const errores = {
        'salario-integrante': errorSalariosIngresados
    }

    const esExito = manejarErroresIntegrantes(errores) === 0;

    if (esExito){
       
        document.querySelector('#promedio-anual').textContent = calcularPromedio(salariosObtenidos)
        document.querySelector('#mayor-anual').textContent = calcularMayor(salariosObtenidos)
        document.querySelector('#menor-anual').textContent = calcularMenor(salariosObtenidos)
        document.querySelector('#promedio-mensual').textContent = calcularPromedioMensual(salariosObtenidos)
  
        mostrar('#totales')
        ocultar('#calcular')
        ocultar('#agregar')
        ocultar('#eliminar')
    }
}

function manejarErroresIntegrantes(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error){
            cantidadErrores ++;
         
            let $error = document.createElement('li');
            $error.id = 'error'
            $error.innerText = error;

            $errores.appendChild($error);

        }
    });
    return cantidadErrores
}


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
    $label.id = 'texto-integrante' + (indice + 1)
    
    const $salarioAnual = document.createElement('input');
    $salarioAnual.type = 'text';
    $salarioAnual.className = 'salarios';
    $salarioAnual.id = 'salario-anual-integrante' + (indice + 1);
    $salarioAnual.name = 'salario-integrante';

    $div.appendChild($label);
    $div.appendChild($salarioAnual);
      
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);

    mostrar('#calcular')
}

function borrarIntegrantesAnteriores() {
    const $integrante = document.querySelectorAll('.integrante');
    
    if ($integrante.length === 1){
        ocultar('#calcular')
        $integrante[$integrante.length - 1].remove();
    } else if ($integrante.length > 1){
        $integrante[$integrante.length - 1].remove();
    }
}

function borrarTodosLosIntegrantes() {
    const $integrante = document.querySelectorAll('.integrante');
    for (let i = 0; i<$integrante.length;i++){
        $integrante[i].remove();
    }
}

function mostrar(selector) {
    document.querySelector(selector).style.display = ''
}

function ocultar(selector) {
    document.querySelector(selector).style.display = 'none'
}

function resetear() {
    borrarTodosLosIntegrantes()
    limpiarErrores()
    ocultar('#totales')
    ocultar('#calcular')
    mostrar('#agregar')
    mostrar('#eliminar')
}

function limpiarErrores(){
    const $errores = document.querySelectorAll('#error');
      
    for (let i=0;i<$errores.length;i++){
        $errores[i].remove();
    }
}

