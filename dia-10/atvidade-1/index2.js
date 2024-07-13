let array= []
let arrayinvertido = []

let quantidadedearray= parseInt (prompt('Quanto array deseja colocar?'))
let oper = quantidadedearray - 1 


for (let a= 0; a < quantidadedearray; a++){
    let  jordan= parseInt (prompt('Digite o' + (a + 1) +'ª número'))
    array [a]= jordan
}
console.log ('Array orrihinal ' + array)

let invertido = oper
for(let a= 0; a < quantidadedearray; a++){
    arrayinvertido [a] = array[invertido]
    invertido--
}
console.log ('Array invertido ' + arrayinvertido)
