//Entrada de dados
let idade= Number (prompt('Digite sua idade'))
let nome= prompt ('Digite seu nome')
let peso= parseFloat (prompt('Digite seu peso'))
let altura= parseFloat (prompt('digite sua altura'))
let profissão= prompt ('Digite sua profissão')

console.log('Olá ' + nome + ' você tem ' + idade + ' anos, é ' + profissão + ', tem ' + altura + 'M de altura e pesa ' + peso + 'Kg.')


// Verificação de Dados para bebidas
if (idade >= 18){
    console.log('Está liberado para tomar umas geladas')
}else{
    console.log('Sem gelada para você')
}

// calcular dados pessoal
let dias= idade * 365
let meses= idade * 12 
let semanas= idade * 7
console.log('Sua idade em meses é: '+ meses)
console.log('Sua idade em dias é: '+ dias)
console.log('Sua idade em semanas é: '+ semanas)