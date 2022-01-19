//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadClases = document.querySelector('#cantidad-clases');
    const cantidadClases = Number($cantidadClases.value);
  
    borrarClasesAnteriores();
    crearClases(cantidadClases);
  
    event.preventDefault();
}

document.querySelector('#resetear').onclick = resetear;

function crearClases(cantidadClases) {

    if (cantidadClases > 0) {
      mostrar('#calcular');
    } else {
      resetear();
    }
  
    for (let i = 0; i < cantidadClases; i++) {
      crearClase(i);
    }
  }
  
function crearClase(indice) {
    const $div = document.createElement('div');
    $div.className = 'clase';
  
    const $label = document.createElement('label');
    $label.textContent = 'Datos Clase # ' + (indice + 1) + ' - Ingrese hs / Minutos / Segundos ';
    $label.id = 'textoClase' + (indice + 1)
    const $hora = document.createElement('input');
    $hora.type = 'number';
    $hora.className = 'horas'
    $hora.id = 'horasClase' + (indice + 1)

    const $minuto = document.createElement('input');
    $minuto.type = 'number';
    $minuto.className = 'minutos'
    $minuto.id = 'minutosClase' + (indice + 1)

    const $segundo = document.createElement('input');
    $segundo.type = 'number';
    $segundo.className = 'segundos'
    $segundo.id = 'segundosClase' + (indice + 1)
  
    $div.appendChild($label);
    $div.appendChild($hora);
    $div.appendChild($minuto);
    $div.appendChild($segundo);
  
    const $clases = document.querySelector('#clases');
    $clases.appendChild($div);
}

document.querySelector('#calcular').onclick = function(event) {
    const segundos = obtenerTiempo('.segundos')
    const minutos = obtenerTiempo('.minutos')
    const horas = obtenerTiempo('.horas')
    const tiempoFinal = calcularTiempoFinal(horas,minutos,segundos)

    document.querySelector('#tiempo-total').textContent = tiempoFinal

    mostrar('#totales')
}

function obtenerTiempo(id){
  const $tiempoObtenido = document.querySelectorAll('.clase ' + id)
  let tiempo = 0

  for (let i=0;i < $tiempoObtenido.length;i++){
      tiempo += Number($tiempoObtenido[i].value)
  }

  return tiempo.toFixed(2)
}

function calcularTiempoFinal (horas,minutos,segundos){
    const minutosCompletos = Math.trunc(segundos / 60);
    const segundosRestantes = segundos % 60; 

    const horasCompletas = Math.trunc(minutos / 60);
    const minutosRestantes = minutos % 60; 

    const horasFinal = horasCompletas + Number(horas)
    const minutosFinal = minutosCompletos + minutosRestantes
    const segundosFinal = segundosRestantes

    return horasFinal + 'hs ' + minutosFinal + 'min ' + segundosFinal + 'seg '
}

function borrarClasesAnteriores() {
  const $clases = document.querySelectorAll('.clase');
  for (let i = 0; i < $clases.length; i++) {
    $clases[i].remove();
  }
}

function resetear() {
  borrarClasesAnteriores()
  ocultar('#calcular')
  ocultar('#totales')
}

function ocultar(id) {
  document.querySelector(id).style.display = 'none'
}

function mostrar(id) {
  document.querySelector(id).style.display = ''
}


