function probarValidarSalariosIngresados (){
    console.assert(
        validarSalariosIngresados(0) === 'Debe ingresar el salario de los integrantes de su familia', 
        'validarSalariosIngresados no validó que no se cargue el salario de los integrantes de la familia'
    )

    console.assert(
        validarSalariosIngresados(-1) === 'El salario ingresado se debe cargar en positivo', 
        'validarSalariosIngresados no validó que se ingrese un número negativo como edad'
    )

    console.assert(
        validarSalariosIngresados('.') === 'Solo puede ingresar números para determinar el salario de un integrante de su familia',
        'validarSalariosIngresados no validó que se ingresen caracteres especiales'
    )
    
    console.assert(
        validarSalariosIngresados(5) === '',
        'validarSalariosIngresados no validó que se haya ingresado un valor correcto de salario'
    )

}

probarValidarSalariosIngresados();
