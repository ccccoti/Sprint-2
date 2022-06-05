let sum = 0
let cadaUno = 0

function dividir(persona, gastado, cantPers){
    
    sum += parseFloat(gastado)
    cadaUno = sum / cantPers


    $("#total").text("$"+ sum)
    $("#cadaUno").text("$" + cadaUno)
}




let contador = 0

function concatenar(){

    let nombre = $("#persona").val()
    let monto = $("#monto").val()
    contador +=1


    dividir(nombre, monto, contador);

    
    let nombres = `<h5>${nombre}: $`

    let montos = `${monto}</h5>`

    $("#aporteIndiv").append(nombres + montos)

    

}

