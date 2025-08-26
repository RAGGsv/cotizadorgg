document.querySelector(".btnnvacot").addEventListener("click", limpiar);

function limpiar(){
    
    document.getElementById("lblprima").innerHTML= "La prima es de";
    document.getElementById("lbltoprima1").innerHTML= "$0.00";
    document.getElementById("lbltoprimacal").innerHTML= "- Prima Calculada (35%) $0.00";
    document.getElementById("lblpagini").innerHTML= "- Pago Inicial (A Facturar) $0.00";
    document.getElementById("lblgasadm").innerHTML= "- Gastos Admin (En Recibo) $0.00";
    document.getElementById("lbltralegal").innerHTML= "- Tramite Legal (En Recibo) $0.00";
    document.getElementById("lblsaldo").innerHTML= "Saldo $0.00";
    document.getElementById("lblpreciom").innerHTML= "Precio de la motocicleta $0.00";

    //document.getElementById("lbl03_03").innerHTML= "03 Cuotas sin intereses de $0.00";
    //document.getElementById("lbl03t_03t").innerHTML= "03 cuotas s/i + traspaso de $0.00";
    document.getElementById("lbl06_06").innerHTML= "$0.00";
    document.getElementById("lbl12_12").innerHTML= "$0.00";
    document.getElementById("lbl18_18").innerHTML= "$0.00";
    document.getElementById("lbl24_24").innerHTML= "$0.00";
    document.getElementById("lbl30_30").innerHTML= "$0.00";

    document.querySelector('.titulo-pago').style.display = 'none';
    document.querySelector('.tabla-container1').style.display = 'none';
    document.querySelector('.input-grupo0').style.display = 'none';

    formulario.reset();
    document.getElementById("numero1").focus();
}