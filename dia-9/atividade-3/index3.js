
let hum
let continuar
let op= 10
let som1 = 0 
do {
    hum = Number (prompt('Digite um ano é descubra quanto ano vc vai ter no futuro'))
    for (let gh= hum;gh < hum + op; gh++ ) {
        console.log(gh + " você tem " + som1 + " anos de idade")
        som1++
    }

  // Loop continuar

    continuar = prompt ('Desejesa inseir os dados novamente? (s/n)')
} while (continuar == "s");