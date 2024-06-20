//1 - Faça um algoritmo que receba um valor, 
//inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.

let m= Number (prompt("digite um número positivo e inteiero!"))
for (let san = 0; san <= m ;san++){
    console.log(san)
}

//Desenvolva um algoritmo
 //que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5

for (let ty =0;ty <=50; ty += 5){
    console.log(ty)
}

//Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa
for (let J=50; J >=0; J -= 5) {
    console.log(J)
}