
let movimientosPC = []
let movimientosUsuario = []

document.querySelector('#empezarJuego').onclick = function(event) {
    comenzarJuego()
}

function comenzarJuego(){
    movimientosPC = []
    movimientosUsuario = []
    manejarJuego()    
}

function manejarJuego(){
    bloquearInputUsuario()
    document.querySelector('#mensaje').placeholder = 'Turno de la PC'

    manejarTurnoPC()

}

function manejarTurnoPC(){
    let movimiento = obtenerTurnoPC()
    movimientosPC.push(movimiento)
        
    movimientosPC.forEach (function(item,index){
        let espacioMovimiento = (index + 1) * 1000
        setTimeout(function(){ marcarMovimientos(item)}, espacioMovimiento)
    })

    setTimeout(function(){document.querySelector('#mensaje').placeholder = 'Turno Usuario'},((movimientosPC.length + 1) * 1000))
    desbloquearInputUsuario()
    
}

function obtenerTurnoPC(){
    let inicio = 1
    let fin = 4
    let enteroAleatorio = inicio + Math.floor(Math.random()*fin);
    
    return enteroAleatorio
}

function manejarTurnoUsr(e) {
    const $cuadro = Number(e.target.id.substring(7,8));
    marcarMovimientos($cuadro);
    movimientosUsuario.push($cuadro);

    const $cuadroMaquina = movimientosPC[movimientosUsuario.length - 1];
    if ($cuadro !== $cuadroMaquina) {
      finDelJuego();
      return;
    }

    if (movimientosUsuario.length === movimientosPC.length) {
      setTimeout(function(){manejarTurnoPC()}, 1000);

      document.querySelector('#mensaje').placeholder = 'Turno PC'
      movimientosUsuario = []
    }
}

function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadros').forEach(function($cuadro) {
      $cuadro.onclick = manejarTurnoUsr;
    });
}

function bloquearInputUsuario() {
    document.querySelectorAll('.cuadros').forEach(function($cuadro) {
      $cuadro.onclick = function(){};
    });
}


function marcarMovimientos(movimiento){
   document.querySelector('#cuadro-' + movimiento).style.opacity = 1
   setTimeout(function(){ document.querySelector('#cuadro-' + movimiento).style.opacity = 0.3},500)
}


function finDelJuego(){
    document.querySelector('#mensaje').placeholder = 'Perdiste, no continuaste la secuencia correcta'
    bloquearInputUsuario()
}




