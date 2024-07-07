//Entrda de dados
let nome= prompt ('Digite seu nome')
let idade= Number (prompt('Digite sua idade'))
let peso= Number (prompt('Digite seu peso'))
let altura= Number (prompt('Digite sua altura'))

let imc= peso / (altura * altura)
let anodenascimento= 2024 - idade

//Saida de dados
if (imc < 18.5 ){
    console.log ('Olá ' +nome+ ' seu IMC está na magresa, ' +imc+ " kg/m2")
}else if (imc > 18.5 && imc < 24.9){
    console.log ('Olá ' +nome+ ' seu IMC está no normal, ' +imc+ " kg/m2")
}else if (imc > 24.9 && imc < 30){
    console.log ('Olá ' +nome+ ' seu IMC está no sobrepeso, ' +imc+ " kg/m2")
}else if (imc > 30){
    console.log ('Olá ' +nome+ ' seu IMC está no Obesidade, ' +imc+ " kg/m2")
}

console.log('você nasceu em ' + anodenascimento)