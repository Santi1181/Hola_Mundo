function calcularPromedio (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += numeros[i]
    }
    return (acumulador / numeros.length).toFixed(2)
}

function calcularPromedioMensual (numeros){
    let acumulador = 0
    for (let i=0;i<numeros.length;i++){
        acumulador += (numeros[i] / 12)
    }
    return (acumulador / numeros.length).toFixed(2)
}

function calcularMenor (numeros){
    let menor = numeros[0]
    for (let i=0;i<numeros.length;i++){
        if (numeros[i] < menor)  {
            menor = numeros[i]
        } 
    }
    return menor
}


function calcularMayor (numeros){
    let mayor = numeros[0]
    for (let i=0;i<numeros.length;i++){
        if (numeros[i] > mayor)  {
            mayor = numeros[i]
        } 
    }
    return mayor
}


