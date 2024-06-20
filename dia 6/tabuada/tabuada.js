//Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 
//número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
let tabuada= Number (prompt ("digite um número positivo e inteiero!"))
let opc1= tabuada + 1
let opc2= tabuada + 2

for (let gio= 0; gio <= 10; gio++){

    console.log(tabuada +"x"+ gio + '='+ tabuada * gio)


    console.log(opc1 +"x"+ gio + '='+ opc1 * gio)
    console.log(opc2 +"x"+ gio + '='+ opc2 * gio)
}