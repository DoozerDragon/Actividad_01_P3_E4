document.getElementById('numerosForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores ingresados
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let mayor, medio, menor;

    // Uso de if-else para determinar el orden de los números
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            medio = num2;
            menor = num3;
        } else {
            medio = num3;
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            medio = num1;
            menor = num3;
        } else {
            medio = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            medio = num1;
            menor = num2;
        } else {
            medio = num2;
            menor = num1;
        }
    }

    // Uso de switch-case para manejar combinaciones especiales
    switch (true) {
        case (num1 === num2 && num2 === num3):
            document.getElementById('resultado').textContent = `Todos los números son iguales: ${num1}, ${num2}, ${num3}`;
            return;
        case (num1 === num2):
            document.getElementById('resultado').textContent = `Dos números son iguales: ${mayor}, ${medio}, ${menor}`;
            return;
        case (num1 === num3):
            document.getElementById('resultado').textContent = `Dos números son iguales: ${mayor}, ${medio}, ${menor}`;
            return;
        case (num2 === num3):
            document.getElementById('resultado').textContent = `Dos números son iguales: ${mayor}, ${medio}, ${menor}`;
            return;
        default:
            // Si no hay números iguales, mostrar el orden normal
            document.getElementById('resultado').textContent = `Orden: ${mayor}, ${medio}, ${menor}`;
    }
});
