
document.querySelector('#calcular').onclick = function(event) {
    const $sueldoAnual = Number(document.querySelector('#salario-anual').value)
      
    document.querySelector('#salario-mensual').value = calcularSalarioMensual($sueldoAnual);
  
    event.preventDefault();
}

document.querySelector('#refrescar').onclick = function(event) {
    
    document.querySelector('#salario-anual').value = ''
    document.querySelector('#salario-mensual').value = ''
  
    event.preventDefault();
}

function calcularSalarioMensual (sueldoAnual){
    let salarioMensual = sueldoAnual / 12
    return salarioMensual.toFixed(2)
}

