function probarValidarNombre (){
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un caracter', 
        'validarNombre no validó un string vacío'
    )

    console.assert(
        validarNombre('1111111111111111111111111111111111111111111111111111111111111111111111') === 
        'Este campo debe tener menos de 50 caracteres', 'validarNombre no validó un string con mas de 50 caracteres'
    )

    console.assert(
        validarNombre('Santiago') === '', 'validarNombre no validó un nombre valido'
    )

}

function probarValidarCiudad (){
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad de la lista', 'validarCiudad no validó un string vacío'
    )

    console.assert(
        validarCiudad('Catamarca') === '','validarCiudad no validó una ciudad correcta'
    )

}

function probarValidarDescripcionRegalo (){
    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
        'La descripción del regalo debe ser menor a 100 caracteres', 
        'validarDescripcionRegalo no validó un string con mas de 100 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('') === 'Se debe indicar una descripción del regalo', 
        'validarDescripcionRegalo no validó un string vacío'
    )

    console.assert(
        validarDescripcionRegalo('Descripción') === '', 
        'validarDescripcionRegalo no validó una descripción correcta'
    )

    console.assert(
        validarDescripcionRegalo('?¿+*') === 'La descripción solo debe indicar Letras o Números', 
        'validarDescripcionRegalo no validó una descripción con caracteres especiales'
    )

    
}


probarValidarNombre()
probarValidarCiudad()
probarValidarDescripcionRegalo()









