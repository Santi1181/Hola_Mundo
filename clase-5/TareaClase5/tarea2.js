

document.querySelector('#mostrar').onclick = function(event) {
    const $nombre = document.querySelector('#nombre').value;
    const $apellido = document.querySelector('#apellido').value;
    const $edad = document.querySelector('#edad').value;
  
    document.querySelector('#resultado').textContent = validarIngreso($edad,$nombre,$apellido);

    document.querySelector('#resultado-ingreso').style.display = ''
    document.querySelector('#saludo').textContent = `Bienvenido, ${$nombre} ${$apellido}!!!!`
      
    event.preventDefault();
}

function validarIngreso(edad,nombre,apellido){
    if (edad >= 18){
        return `Podes ingresar al Bar, ${nombre} ${apellido}, porque tenes ${edad} años de edad`
    } else {
        return `No podes ingresar al Bar, ${nombre} ${apellido}, sos menor. Tenes ${edad} años de edad`
    }

}