//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

document.querySelector('#calcular').onclick = function(event) {
    const sueldoAnual = Number(document.querySelector('#salario-anual').value)
    document.querySelector('#salario-mensual').value = calcularSalarioMensual(sueldoAnual);
    event.preventDefault();
}

document.querySelector('#refrescar').onclick = function(event) {
    document.querySelector('#salario-anual').value = ''
    document.querySelector('#salario-mensual').value = ''
}

function calcularSalarioMensual (sueldoAnual){
    const salarioMensual = sueldoAnual / 12
    return salarioMensual.toFixed(2)
}

