class aluno {
    Nome 
    Idade
    Nota

    constructor(nome, idade, nota){
        this.Nome = nome
        this.Idade = idade
        this.Nota = nota
    }
}

//Array
let ArrayAluno = []

function CadastrarAluno(nome,idade,nome,array) {
    let objAluno = new aluno(nome,idade,nota)
    if (!array.some (x => x.Nome == nome))
        array.push (objAluno) 
    return objAluno
}

function OdenarNota (array){
    array.sort ((a,b) => a.Nota - b.nota)
    return array
}

function OrdenarNota (array){
    array.sort ((a,b) => b.Nota - a.nota)
    return array
}

function OrdenarPorNome(array) {
    array.sort((a, b) => {
        // Converter para maiúsculas para garantir a ordem correta
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
    return array;
}

function CalcularMedia(array) {
    if (array.length === 0) {
        return 0; // Retorna 0 se o array de alunos estiver vazio
    }
    let somaNotas = 0;

    array.forEach((aluno) => {
        somaNotas += Number(aluno.Nota);
    });

    const media = somaNotas / array.length;
    return media;
}
