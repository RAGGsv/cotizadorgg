document.querySelector(".btnnvocalc").addEventListener("click", limpiar);

function limpiar(){
    
    document.getElementById("lblsalini").innerHTML= "- Saldo inicial $0.00";
    document.getElementById("lblmonmen").innerHTML= "- Monto mensual $0.00";
    document.getElementById("lblmonpag").innerHTML= "- Monto pagado (0 cuotas) $0.00";
    document.getElementById("lblsalres").innerHTML= "- Saldo restante $0.00";
    document.getElementById("lblsalpag").innerHTML= "- Saldo a pagar de contado $0.00";
    document.getElementById("lbldesapli").innerHTML= "- Descuento a aplicar (%)";

    //document.querySelector('.input-grupo0').style.display = 'none';

    formulario.reset();
    document.getElementById("numero1").focus();
}