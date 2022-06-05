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








// let personas = []
// let montos = []

// personas.push(document.getElementById("persona"))
// montos.push(document.getElementById("monto"))


// function pegarResultado(resultado) {
//     let nodo= document.getElementById("resultado")
//     nodo.innerText=resultado
// }


// function division(){
//     let total = 0
//     for (let monto in montos){
//     total +=monto
//     }
//     return total

//     let divi = 0
//     for (let i=1;i<montos.length;i++){
//         divi += i
//     }
//     return divi

//     let cuenta = total/divi
//     return cuenta
// }