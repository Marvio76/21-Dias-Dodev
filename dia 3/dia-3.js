/*declarando variaveis*/
let nome= ("digite seu nome");
let idade= (prompt("digite sua idade"));
let altura= (prompt("digite sua altura"));
let peso= (prompt("digite seu peso"));
//calculando o ano que a pessoa nasceu e o IMC
let anoDeNascimento= 2023-idade;
let imc= peso / (peso*peso);
//Exibindo as informacões no console
console.log('Olá ' + nome +" você  tem " + idade + ' anos,nasceu em '+ anoDeNascimento + ", tem "+ altura + ' de altura,pesa '+
peso + 'kg seu IMC é '+ imc + ' Kg/m2');


