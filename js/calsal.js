// Establecer foco inicial
document.getElementById("numero1").focus();

// Evento para boton calcular
document.getElementById("myBtncalsalconta").addEventListener("click", calsalcont);

// Funcion para pasar al siguiente campo con Enter
function avanzarConEnter(actualId, siguienteId) {
    document.getElementById(actualId).addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById(siguienteId).focus();
        }
    });
}

// Configurar navegacion entre inputs
avanzarConEnter("numero1", "numero2");
avanzarConEnter("numero2", "numero3");
avanzarConEnter("numero3", "lista");

// Permitir que Enter en "lista" ejecute el calculo
document.getElementById("lista").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        calsalcont();
    }
});

function calsalcont() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let num3 = parseInt(document.getElementById('numero3').value);
    let num4 = parseFloat(document.getElementById('lista').value); // tasa seleccionada

    if (isNaN(num1) || num1 <= 0) {
        document.getElementById("numero1").value = "";
        document.getElementById("numero1").focus();
    } else if (isNaN(num2)) {
        document.getElementById("numero2").focus();
    } else if (num2 < 0) {
        document.getElementById("numero2").value = "";
        document.getElementById("numero2").focus();
    } else if (isNaN(num3) || num3 <= 0) {
        document.getElementById("numero3").value = "";
        document.getElementById("numero3").focus();
    } else if (isNaN(num4)) {
        document.getElementById("lista").focus();
    } else {

        //document.querySelector('.input-grupo0').style.display = 'block';

        let salini = (num1 - num2).toFixed(2);
        let docem = (((((salini * 0.03) * num4) + 65) * 1.13 + parseFloat(salini)) / num4).toFixed(2);
        let montopag = (docem * num3).toFixed(2);
        let salrestante = (((((salini * 0.03) * num4) + 65) * 1.13 + parseFloat(salini)) - montopag).toFixed(2);

        let saldodividido = (salini / num4).toFixed(2);
        let mesesrestantes = (num4 - num3);
        let traspdividido = (((65 * 1.13)/num4) * mesesrestantes).toFixed(2);
        let salapagar = ((mesesrestantes * saldodividido) + parseFloat(traspdividido)).toFixed(2);

        let descuento = (((salrestante - salapagar) / salrestante) * 100).toFixed(2);

        document.getElementById("lblsalini").innerHTML = "- Saldo inicial $" + salini;
        document.getElementById("lblmonmen").innerHTML = "- Monto mensual $" + docem;
        document.getElementById("lblmonpag").innerHTML = "- Monto pagado (" + num3 + " Cuotas) $" + montopag;
        document.getElementById("lblsalres").innerHTML = "- Saldo restante $" + salrestante;
        document.getElementById("lblsalpag").innerHTML = "- Saldo a pagar de contado $" + salapagar;
        document.getElementById("lbldesapli").innerHTML = "- Descuento a aplicar (%): " + descuento + "%";
    }

}
