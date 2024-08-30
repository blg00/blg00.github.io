function calcularComision() {
    // Obtener los valores de los controles
    var renta = parseFloat(document.getElementById("rentaservicio").value);
    var tipoVenta = document.getElementById("tventa").value;
    var tipoServicio = document.getElementById("tservicio").value;
    var resultado;

    // Evaluar las condiciones
    switch (true) {
        // Caso: POSPAGO CON EQUIPO / SIN EQUIPO
        case renta <= 20 && tipoVenta === "CON EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 1.20 * 0.36).toFixed(2);
            break;
        case renta <= 20 && tipoVenta === "SIN EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 0.88 * 0.26).toFixed(2);
            break;
        case renta >= 20.01 && renta <= 25.00 && tipoVenta === "CON EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 1.26 * 0.38).toFixed(2);
            break;
        case renta >= 20.01 && renta <= 25.00 && tipoVenta === "SIN EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 0.93 * 0.28).toFixed(2);
            break;
        case renta >= 25.01 && renta <= 30.00 && tipoVenta === "CON EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 1.43 * 0.43).toFixed(2);
            break;
        case renta >= 25.01 && renta <= 30.00 && tipoVenta === "SIN EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 0.95 * 0.29).toFixed(2);
            break;
        case renta >= 30.01 && renta <= 40.00 && tipoVenta === "CON EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 1.62 * 0.49).toFixed(2);
            break;
        case renta >= 30.01 && renta <= 40.00 && tipoVenta === "SIN EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 0.98 * 0.29).toFixed(2);
            break;
        case renta >= 40.01 && tipoVenta === "CON EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 2.09 * 0.63).toFixed(2);
            break;
        case renta >= 40.01 && tipoVenta === "SIN EQUIPO" && tipoServicio === "POSPAGO":
            resultado = "$" + (renta * 1.00 * 0.30).toFixed(2);
            break;
        default:

        // CASO: MULTIMEDIA 1 PLAY/ 2 PLAY/ 3 PLAY
        case renta >= 13.990 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.00 * 0.30).toFixed(2);
            break;
        case renta >= 13.990 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.17 * 0.35).toFixed(2);
            break;
        case renta >= 13.990 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.34 * 0.40).toFixed(2);
            break;
        case renta >= 14.000 && renta <= 19.999 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.07 * 0.32).toFixed(2);
            break;
        case renta >= 14.000 && renta <= 19.999 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.37 * 0.41).toFixed(2);
            break;
        case renta >= 14.000 && renta <= 19.999 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.60 * 0.48).toFixed(2);
            break;
        case renta >= 20.000 && renta <= 29.990 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.30 * 0.39).toFixed(2);
            break;
        case renta >= 20.000 && renta <= 29.990 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.50 * 0.45).toFixed(2);
            break;
        case renta >= 20.000 && renta <= 29.990 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.70 * 0.51).toFixed(2);
            break;
        case renta >= 30.000 && renta <= 39.990 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.45 * 0.44).toFixed(2);
            break;
        case renta >= 30.000 && renta <= 39.990 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.70 * 0.51).toFixed(2);
            break;
        case renta >= 30.000 && renta <= 39.990 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 2.00 * 0.60).toFixed(2);
            break;
        case renta >= 40.000 && renta <= 49.990 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.50 * 0.45).toFixed(2);
            break;
        case renta >= 40.000 && renta <= 49.990 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.90 * 0.57).toFixed(2);
            break;
        case renta >= 40.000 && renta <= 49.990 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 2.20 * 0.66).toFixed(2);
            break;
        case renta >= 50.000 && renta <= 64.990 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.53 * 0.46).toFixed(2);
            break;
        case renta >= 50.000 && renta <= 64.990 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.92 * 0.58).toFixed(2);
            break;
        case renta >= 50.000 && renta <= 64.990 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 2.23 * 0.67).toFixed(2);
            break;
        case renta >= 65.000 && tipoVenta === "1 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 1.63 * 0.49).toFixed(2);
            break;
        case renta >= 65.000 && tipoVenta === "2 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 2.04 * 0.61).toFixed(2);
            break;
        case renta >= 65.000 && tipoVenta === "3 PLAY" && tipoServicio === "MULTIMEDIA":
            resultado = "$" + (renta * 2.34 * 0.70).toFixed(2);
            break;

            resultado = "No se cumple la condición especificada.";
    }

    // Mostrar el resultado en algún elemento HTML (por ejemplo, un <p> con id="resultado")
    document.getElementById("resultado").textContent = resultado;
}
