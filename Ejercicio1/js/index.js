function calcularArea() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;

    base = parseFloat(base);
    altura = parseFloat(altura);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos para la base y la altura.");
        return;
    }

    var area = base * altura;

    document.getElementById("resultado").innerHTML = "El área del rectángulo es: " + area 
}