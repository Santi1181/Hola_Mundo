function validarCantidadIntegrantes(integrantes){
    if (integrantes === 0){
        return 'Debe ingresar el numero de integrantes de su familia'
    }

    if (integrantes < 0){
        return 'El número de integrantes de su familia debe ser positivo'
    }

    if (!/^\d+$/.test(integrantes)){
        return 'Solo puede ingresar números para determinar la cantidad de integrantes de su familia'
    }

    return ''
}

function validarEdadesIngresadas(edades){
    let edadesObtenidas = obtenerEdades(edades)

    for (let i=0;i<edadesObtenidas.length;i++){
        if (edadesObtenidas[i] === 0){
            return 'Debe ingresar la edad de los integrantes de su familia'
            break;
        }
    
        if (edadesObtenidas[i] < 0){
            return 'La edad se debe cargar en positivo'
            break;
        }
    
        if (!/^\d+$/.test(edadesObtenidas[i])){
            return 'Solo puede ingresar números para determinar la edad de un integrante de su familia'
            break;
        }


    }

    return ''    
}