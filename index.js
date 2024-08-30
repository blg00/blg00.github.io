function calcularComision() {
    // Obtener los valores de los controles
    var renta = parseFloat(document.getElementById("rentaservicio").value);
    var tipoVenta = document.getElementById("tventa").value;
    var tipoServicio = document.getElementById("tservicio").value;
    var resultado;

    // Evaluar las condiciones
    switch (true) {
        // Caso: POSPAGO, renta menor o igual a 20
        case renta <= 20 && tipoVenta === "CON EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 1.2 * 0.36).toFixed(2);
            break;
        case renta <= 20 && tipoVenta === "SIN EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 0.88 * 0.26).toFixed(2);
            break;
        // Otros casos similares...
        // (Agrega aquí los demás casos según tus condiciones)

        default:
            resultado = "No se cumple la condición especificada.";
    }

    // Mostrar el resultado en algún elemento HTML (por ejemplo, un <p> con id="resultado")
    document.getElementById("resultado").textContent = resultado;
}