//Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando
// a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


// - A média geral dos alunos
//- Quantos homens enviaram as notas
// - Quantas mulheres tiveram nota acima de 7
// - Qual a maior nota entre os homens



// VARIÁVEL
let media = 0
let qtdhomens = 0
let quantidademulher7 = 0
let maiornotahomem = 0
let notalimite = 0

//nota,sexo
while (notalimite <= 10){
    nota = parseInt (prompt('Digite a nota do '+ notalimite + 'º aluno'))
    sexo = prompt('Digite o sexo do aluno (m/f)')

    if (sexo == 'm') {
        if (nota > maiornotahomem){
            maiornotahomem = nota
        }
       qtdhomens++
    }

    if ( sexo == 'f' && nota > 7){
       quantidademulher7++
    }

    media += nota
      notalimite++
}

media = media / 10
console.log('A nota geral dos alunos foi: '+ media)
console.log('A quantidade de homens cadastrados foi: ' + qtdhomens) 
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi: '+ quantidademulher7)
console.log('A maior nota entre os homens foi: ' + maiornotahomem)