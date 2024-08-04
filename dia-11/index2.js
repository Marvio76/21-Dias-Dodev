// Variaveis
let modelos = []
let anos = []
let valoress = []
let continuar = true
let opc
let contador = 0

//LOOP
while(continuar){
    let m = prompt ('Digite o modelo do carro!')
    let a = parseInt (prompt('Digite o ano do carro!'))
    let v = Number (prompt('Digite o valor do carro!'))
    modelos [contador] = m
    anos [contador] = a
    valoress [contador] = v
    contador++


    opc = prompt ('Deseja cadastrar um novo carro? (s/n')
    if (opc == 'n'){
        continuar = false
    }
}
// Exibindo os arrays para verificar os dados inseridos
console.log('carro Cadastrados:')
for (let i= 0; i < modelos.length; i++){
    console.log(modelos[i] + ' - ' + anos[i] + ' - ' + valoress[i]+'$')
}