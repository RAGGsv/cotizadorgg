document.getElementById("myBtnPrimin").addEventListener("click", calprimin)
document.getElementById("numero2").addEventListener("keydown",teclaEnter02);

function teclaEnter02(e){
    (e.key==="Enter") && calprimin()
}

function calprimin(){

    let num1, num2, prima, primin, pagini, gasadm, tralegal, saldo, saldo1, precio, rescseis, rescdoce, rescdocho, rescvcuatro, restreinta;
    
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    precio = (parseFloat (num1)).toFixed(2);

    saldo1 = parseFloat(num1) - parseFloat(num2)

    if (num1 == "" || num1 <= "0") {
        
      //alert("Para calcular prima minima ingrese el precio de la motocicleta.....!")
      document.getElementById("numero2").value = "";
      document.getElementById("numero1").value = "";
      document.getElementById("numero1").focus();
        
    } else if (num2 =="") {

        //alert("Ingrese el valor de una prima minima.....!")
        document.getElementById("numero2").focus();

    } else if (num2 < "0") {

        //alert("La prima minima no puede ser menor a cero.....!")
        document.getElementById("numero2").value = "";
        document.getElementById("numero2").focus();

    } else if (saldo1 <= "0") {

        //alert("Su saldo es igual o menor a cero no se puede realizar un plan de pago.....!")
        document.getElementById("numero2").focus();
    
    } else {

        document.querySelector('.titulo-pago').style.display = 'block';
        document.querySelector('.tabla-container1').style.display = 'block';
        document.querySelector('.input-grupo0').style.display = 'flex';

        //gasadm = parseFloat(250).toFixed(2);
        tralegal = parseFloat(65).toFixed(2);
        gasadm = parseFloat(250).toFixed(2) - parseFloat(tralegal).toFixed(2);
        prima = (parseFloat(num1) * 0.30).toFixed(2);
        primin = parseFloat(num2).toFixed(2);
        saldo = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
        pagini = parseFloat(num2) - parseFloat(250).toFixed(2);

        document.getElementById("lblprima").innerHTML= "La prima es de";
        document.getElementById("lbltoprima1").innerHTML= "$" + primin;
        document.getElementById("lbltoprimacal").innerHTML= "- Prima Calculada (30%) $" + prima;
        document.getElementById("lblpagini").innerHTML= "- Pago Inicial (A Facturar) $" + pagini;
        document.getElementById("lblgasadm").innerHTML= "- Gastos Admin (En Recibo) $" + gasadm;
        document.getElementById("lbltralegal").innerHTML= "- Tramite Legal (En Recibo) $" + tralegal;
        document.getElementById("lblsaldo").innerHTML= "Saldo $" + saldo;
        document.getElementById("lblpreciom").innerHTML= "Precio de la motocicleta $" + precio;

        rescseis = ((((((saldo * 0.03) * 6) + 65) * 1.13) + saldo1)/6).toFixed(2)
        rescdoce = ((((((saldo * 0.03) * 12) + 65) * 1.13) + saldo1)/12).toFixed(2)
        rescdocho = ((((((saldo * 0.03) * 18) + 65) * 1.13) + saldo1)/18).toFixed(2)
        rescvcuatro = ((((((saldo * 0.03) * 24) + 65) * 1.13) + saldo1)/24).toFixed(2)
        restreinta = ((((((saldo * 0.03) * 30) + 65) * 1.13) + saldo1)/30).toFixed(2)

        document.getElementById("lbl06_06").innerHTML= "$" + rescseis;
        document.getElementById("lbl12_12").innerHTML= "$" + rescdoce;
        document.getElementById("lbl18_18").innerHTML= "$" + rescdocho;
        document.getElementById("lbl24_24").innerHTML= "$" + rescvcuatro;
        document.getElementById("lbl30_30").innerHTML= "$" + restreinta;
    }         
}


