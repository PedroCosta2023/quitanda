const tomateKg = document.getElementById ("tomateKg")
const macaKg = document.getElementById ("macaKg")

const precoTomateKg = 2.50
const precoMacaKg = 1.80

const precoTomatePromo = 2.20
const precoMacaPromo = 1.50

let precoTotal = document.getElementById ("valorTotal")

let precoTomate = 0
let precoMaca = 0

function calcularTotal() {

    precoTomate = tomateKg.value * precoTomateKg
    precoTotal.textContent = Number(precoTomate)

}