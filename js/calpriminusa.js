document.getElementById("myBtnPriminusa").addEventListener("click", calprimin)
document.getElementById("numero2").addEventListener("keydown",teclaEnter02);

function teclaEnter02(e){
    (e.key==="Enter") && calprimin()
}

function calprimin(){

    let num1, num2, primin, saldo, saldo1, precio, resctres, rescseis, rescdoce, rescdocho, rescvcuatro;
    
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

        primin = (parseFloat(num2) + 10).toFixed(2);
        saldo = (parseFloat(num1) - parseFloat(num2)).toFixed(2);

        document.getElementById("lblprima").innerHTML= "Prima minima + papeleo";
        document.getElementById("lbltoprima1").innerHTML= "$" + primin;
        document.getElementById("lblsaldo").innerHTML= "Saldo $" + saldo;
        document.getElementById("lblpreciomo1").innerHTML= "Precio de la motocicleta $" + precio;

        resctres = (saldo1 / 3).toFixed(2)
        //resctrest = ((saldo1 + 65) / 3).toFixed(2)
        rescseis = (((saldo1 * 0.03) * 6 + saldo1) / 6).toFixed(2)
        rescdoce = (((saldo1 * 0.03) * 12 + saldo1) / 12).toFixed(2)
        rescdocho = (((saldo1 * 0.03) * 18 + saldo1) / 18).toFixed(2)
        rescvcuatro = (((saldo1 * 0.03) * 24 + saldo1) / 24).toFixed(2)

        document.getElementById("lbl03_03").innerHTML= "$"  + resctres;
        //document.getElementById("lbl03t_03t").innerHTML= "03 cuotas s/i + traspaso de $" + resctrest;
        document.getElementById("lbl06_06").innerHTML= "$" + rescseis;
        document.getElementById("lbl12_12").innerHTML= "$" + rescdoce;
        document.getElementById("lbl18_18").innerHTML= "$" + rescdocho;
        document.getElementById("lbl24_24").innerHTML= "$" + rescvcuatro;

        //document.getElementById("NvaCot").focus(0;
        //document.querySelector(".btnnvacot").click();
    }         
}

