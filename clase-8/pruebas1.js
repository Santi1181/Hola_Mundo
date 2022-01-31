function probarValidarCantidadIntegrantes (){
    console.assert(
        validarCantidadIntegrantes(0) === 'Debe ingresar el numero de integrantes de su familia', 
        'validarCantidadIntegrantes no validó que no se cargue la cantidad de integrantes de la familia'
    )

    console.assert(
        validarCantidadIntegrantes(-1) === 'El número de integrantes de su familia debe ser positivo', 
        'validarCantidadIntegrantes no validó que se ingrese un número negativo de cantidad de integrantes'
    )

    console.assert(
        validarCantidadIntegrantes('.') === 'Solo puede ingresar números para determinar la cantidad de integrantes de su familia',
        'validarCantidadIntegrantes no validó que se ingresen caracteres especiales'
    )

    console.assert(
        validarCantidadIntegrantes(5) === '',
        'validarCantidadIntegrantes no validó que se haya ingresado un valor correcto de integrantes'
    )

}


function probarValidarEdadesIngresadas (){
    console.assert(
        validarEdadesIngresadas(0) === 'Debe ingresar la edad de los integrantes de su familia', 
        'ValidarEdadesIngresadas no validó que no se cargue la edad de los integrantes de la familia'
    )

    console.assert(
        validarEdadesIngresadas(-1) === 'La edad se debe cargar en positivo', 
        'ValidarEdadesIngresadas no validó que se ingrese un número negativo como edad'
    )

    console.assert(
        validarEdadesIngresadas('.') === 'Solo puede ingresar números para determinar la edad de un integrante de su familia',
        'ValidarEdadesIngresadas no validó que se ingresen caracteres especiales'
    )

    console.assert(
        validarEdadesIngresadas(5) === '',
        'ValidarEdadesIngresadas no validó que se haya ingresado un valor correcto de edad'
    )

}

probarValidarCantidadIntegrantes();
probarValidarEdadesIngresadas();

