/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
 1. Obtener el valor de `ciudad` y validar que no sea vacío.
  2. Obtener el valor de `descripcion-regalo` y validar que:
  - tenga menos de 100 caracteres
  - que no esté vacío.
  - sólo tenga letras y números

* */
/*
1.Obtener el valor de un formulario
=========================
    Además de `document.querySelector()`, también se puede usar el nombre
    del formulario para acceder a sus campos.

    **
   `const name = document.formulario.nombre.value;`

   TODO: Ahora crear lo mismo para las variables:
   - ciudad
   - comportamiento
   - descripcionRegalo
*/   

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;


function validarFormulario(event){
    limpiarErrores()
    event.preventDefault(); 
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
       
        let redireccionar = setTimeout(function() {
            window.location='wishlist.html'
        }, 5000);

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

function limpiarErrores(){
    const $errores = document.querySelectorAll('#error');
    
    for (let i=0;i<$errores.length;i++){
        $errores[i].remove();
    }
}



/*
2.Validar que el nombre sea válido y escribir una prueba
================================
    
  Agregar algunas validaciones al nombre.
  - Si `nombre` está vacío, imprimir el error: '
  Este campo debe tener al menos 1 caracter'
  - Si `nombre` es mayor a 50 caracteres, imprimir 
  el error: 'Este campo debe tener menos de 50 caracteres'
*/

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'Debe completar la carta con un Nombre'
    }

    if (nombre.length >= 50 ){
        return 'El nombre debe tener menos de 50 caracteres'
    }

    return ''
}

/*
1. Obtener el valor de `ciudad` y validar que no sea vacío.
2. Obtener el valor de `descripcion-regalo` y validar que:
  - tenga menos de 100 caracteres
  - que no esté vacío.
  - sólo tenga letras y números
*/

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return 'Debe seleccionar una ciudad de la lista'
    }

    return ''
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length >= 100){
        return 'La descripción del regalo debe ser menor a 100 caracteres'
    }

    if (descripcionRegalo.length === 0){
        return 'Se debe indicar una descripción del regalo'
    }

    if (!(/[A-z0-9]/.test(descripcionRegalo))){
        return 'La descripción solo debe indicar Letras o Números'
    }

    return ''
}










