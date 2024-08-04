// ENTRADA DE DADOS
let alunos = [];
let resultadonota = [];
let continuar = true;
let contador = 0;
let respota;

// LOOP
while (continuar) {
    let nome = prompt('Digite o nome do ' + (contador + 1) + 'º aluno');
    let nota = parseInt(prompt('Digite a nota do aluno'));
    alunos[contador] = nome;
    resultadonota[contador] = nota;
    respota = prompt('Deseja adicionar mais notas? (s/n)');
    if (respota == "n") {
        continuar = false;
    }
    contador++;
}

// EXIBINDO INFORMAÇÕES
console.log('Notas dos alunos:');
for (let a = 0; a < alunos.length; a++) {
    console.log(alunos[a] + ' - ' + resultadonota[a]);
}

let somadanota = 0;
for (let a = 0; a < alunos.length; a++) {
    somadanota += resultadonota[a];
}

let media = somadanota / alunos.length;
console.log('A soma das notas foi: ' + somadanota);
console.log('A média das notas foi: ' + media);
