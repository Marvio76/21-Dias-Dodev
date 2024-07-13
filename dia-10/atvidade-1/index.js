const array= [];
const indices= [];
let contadorIndice= 0

const numeroProcurado = parseInt (prompt("digite o número a ser procurado:"))

for (let a= 0; a <= 10; a++){
    const elemento = parseInt (prompt(`Digite o elemento ${a + 1}:`));
    array[a] = elemento
}

for (let a= 0; a <= 10;a++){
    if (array[a] === numeroProcurado){
        indices [contadorIndice] = a
        contadorIndice++
    }
}

console.log(`O numero ${numeroProcurado } foi encontrado no índeces: ${indices}`)