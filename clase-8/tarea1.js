/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).

*/

const $form = document.querySelector("#Tarea1Clase6");
$form.onsubmit = validarFormulario;

const $formIntegrantes = document.querySelector("#Tarea1Clase6Integrantes");
$formIntegrantes.onsubmit = validarFormularioIntegrantes;

function validarFormulario(event){
    limpiarErrores()
    event.preventDefault(); 
    const $form = document.querySelector("#Tarea1Clase6");

    const cantidadIntegrantes = Number($form['cantidad-integrantes'].value);
    
    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes)
        
    const errores = {
        'cantidad-integrantes': errorCantidadIntegrantes
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito){
        borrarIntegrantesAnteriores();
        crearIntegrantes(cantidadIntegrantes);
        document.querySelector("#siguiente-paso").disabled = "true"
        document.querySelector("#cantidad-integrantes").disabled = "true"
        }
}
    

function validarFormularioIntegrantes(event){
    limpiarErrores()
    event.preventDefault(); 
    const $formIntegrantes = document.querySelector("#Tarea1Clase6Integrantes");

    const $edadesObtenidas = document.querySelectorAll('.edades')

    const errorEdadesIngresadas = validarEdadesIngresadas($edadesObtenidas)

    const errores = {
        edadIntegrante: errorEdadesIngresadas
    }

    const esExito = manejarErroresIntegrantes(errores) === 0;

    if (esExito){
        const edades = obtenerEdades($edadesObtenidas)
        
        document.querySelector('#promedio').textContent = calcularPromedio(edades)
        document.querySelector('#mayor').textContent = calcularMayor(edades)
        document.querySelector('#menor').textContent = calcularMenor(edades)
                
        mostrar('#totales')
    }
    
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error){
            cantidadErrores ++;
            $form[key].className = "error";

            let $error = document.createElement('li');
            $error.id = 'error'
            $error.innerText = error;

            $errores.appendChild($error);

        }else {
            $form[key].className = "";
        }
    });

    return cantidadErrores

}

function manejarErroresIntegrantes(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#erroresIntegrantes');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error){
            cantidadErrores ++;
            $formIntegrantes[key].className = "error";

            let $error = document.createElement('li');
            $error.id = 'error'
            $error.innerText = error;

            $errores.appendChild($error);

        }else {
            $formIntegrantes[key].className = "";
        }
    });

    return cantidadErrores

}

function limpiarErrores(){
    const $errores = document.querySelectorAll('#error');
    const $erroresIntegrantes = document.querySelectorAll('#errorIntegrantes');
    
    for (let i=0;i<$errores.length;i++){
        $errores[i].remove();
    }
    for (let i=0;i<$erroresIntegrantes.length;i++){
        $erroresIntegrantes[i].remove();
    }
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
    $edad.type = 'text';
    $edad.className = 'edades'
    $edad.id = 'edadIntegrante' + (indice + 1)
    $edad.name = 'edadIntegrante'
    

    $div.appendChild($label);
    $div.appendChild($edad);
      
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}


function obtenerEdades(edades){
    let edadesObtenidas = []
  
    for (let i=0;i < edades.length;i++){
        edadesObtenidas.push(Number(edades[i].value))
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
    limpiarErrores()
    ocultar('#calcular')
    ocultar('#totales')
    document.querySelector("#cantidad-integrantes").disabled = ""
    document.querySelector("#cantidad-integrantes").value = ""
    document.querySelector("#siguiente-paso").disabled = ""
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
        acumulador += numeros[i]
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


