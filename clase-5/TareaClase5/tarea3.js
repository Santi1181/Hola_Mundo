/*
const $horas = document.querySelectorAll('#horas')


for (let i = 0;i<$horas.length;i++){
    console.log($horas[i].value)
}

//document.querySelectorAll('#horas')[1].value
*/

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
      mostrarBotonCalculo();
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

function borrarClasesAnteriores() {
  const $clases = document.querySelectorAll('.clase');
  for (let i = 0; i < $clases.length; i++) {
    $clases[i].remove();
  }
}

function resetear() {
  borrarClasesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}

function ocultarBotonCalculo() {
  document.querySelector('#calcular').style.display = 'none';
}
  
function mostrarBotonCalculo() {
  document.querySelector('#calcular').style.display = '';
}
  
function ocultarResultados() {
  document.querySelector('#totales').style.display = 'none';
}
  
function mostrarResultados() {
  document.querySelector('#totales').style.display = '';
}

document.querySelector('#calcular').onclick = function(event) {
    const segundos = obtenerSegundos();
    const minutos = obtenerMinutos()
    const horas = obtenerHoras()
    const tiempoFinal = calcularTiempoFinal(horas,minutos,segundos)

    mostrarResultados()

    document.querySelector('#tiempo-total').textContent = tiempoFinal

    event.preventDefault();
};

//Math.trunc(x) -- > me quedo solo con el numero entero
//var decimal = n - Math.floor(n) --> Obtengo parte decimal

function calcularTiempoFinal (horas,minutos,segundos){
    let horasFinal = 0
    let minutosFinal = 0
    let segundosFinal = 0
    let tiempoTotal = 0

    if (segundos > 60){
        let segundosParcial = segundos / 60
        minutosFinal = Math.trunc(segundosParcial)
        segundosFinal = Math.round((segundosParcial - minutosFinal)*60)
        
    } else {
        segundosFinal = Math.trunc(segundos)
    }

    if ((Number(minutos) + Number(minutosFinal)) > 60){
        let minutosParcial = (Number(minutos) + Number(minutosFinal)) / 60
        horasFinal = Math.trunc(minutosParcial)
        minutosFinal = Math.round((minutosParcial - horasFinal)*60)
        
    } else {
        minutosFinal = Math.trunc(minutos)
    }

    if (horasFinal === 0){
        horasFinal = Math.trunc(Number(horas))
    } else {
        let horaParcial = horasFinal
        horasFinal = horaParcial + Number(horas)
    }
    
    return tiempoTotal = horasFinal + 'hs ' + minutosFinal + 'min ' + segundosFinal + 'seg '

}




function obtenerSegundos(){
    const $segundos = document.querySelectorAll('.clase .segundos')
    let segundosTotales = 0

    for (let i=0;i < $segundos.length;i++){
        segundosTotales += Number($segundos[i].value)
    }

    return segundosTotales.toFixed(2)

}

function obtenerMinutos(){
    const $minutos = document.querySelectorAll('.clase .minutos')
    let minutosTotales = 0

    for (let i=0;i < $minutos.length;i++){
        minutosTotales += Number($minutos[i].value)
    }

    return minutosTotales.toFixed(2)
}

function obtenerHoras(){
    const $horas = document.querySelectorAll('.clase .horas')
    let horasTotales = 0

    for (let i=0;i < $horas.length;i++){
        horasTotales += Number($horas[i].value)
    }

    return horasTotales.toFixed(2)
}

