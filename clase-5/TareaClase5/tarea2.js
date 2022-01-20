//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#mostrar').onclick = function(event) {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
  
    document.querySelector('#resultado').textContent = validarIngreso(edad,nombre,apellido);

    document.querySelector('#resultado-ingreso').style.display = ''
    document.querySelector('#saludo').textContent = `Bienvenido, ${nombre} ${apellido}!!!!`
      
    event.preventDefault();
}

function validarIngreso(edad,nombre,apellido){
    if (edad >= 18){
        return `Podes ingresar al Bar, ${nombre} ${apellido}, porque tenes ${edad} años de edad`
    } else {
        return `No podes ingresar al Bar, ${nombre} ${apellido}, sos menor. Tenes ${edad} años de edad`
    }
}
