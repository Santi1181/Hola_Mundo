function validarSalariosIngresados(salarios){
    
    for (let i=0;i<salarios.length;i++){
        if (salarios[i] === 0){
            return 'Debe ingresar el salario de los integrantes de su familia'
            break;
        }
    
        if (salarios[i] < 0){
            return 'El salario ingresado se debe cargar en positivo'
            break;
        }

        if (!/^\d+$/.test(salarios[i])){
            return 'Solo puede ingresar números para determinar el salario de un integrante de su familia'
            break;
        }


    }

    return ''    
}