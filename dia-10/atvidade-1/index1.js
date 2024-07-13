let array= []
let arrayinvertido = []

for (let a= 0; a < 5; a++){
    let  jordan= parseInt (prompt('Digite o' + (a + 1) +'ª número'))
    array [a]= jordan
}
console.log ('Array orrihinal ' + array)

let invertido = 4
for(let a= 0; a < 5; a++){
    arrayinvertido [a] = array[invertido]
    invertido--
}
console.log ('Array invertido ' + arrayinvertido)


