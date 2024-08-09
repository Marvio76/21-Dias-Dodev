let nome;
let salario;

function perguntarColaborador() {
    nome = prompt('Digite o nome do colaborador');
    salario = parseFloat(prompt('Digite o salário do colaborador'));
    calcularAumentoSalario(nome, salario);
}

// Função para calcular o aumento de salário
function calcularAumentoSalario(nome, salario) {
    let aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2; // 20%
    } else if (salario <= 2000) { 
        aumento = 0.15; // 15%
    } else if (salario <= 3000) {
        aumento = 0.1; // 10%
    } else {
        aumento = 0.05; // 5%
    }

    let novoSalario = salario + (salario * aumento);

    // Exibindo os resultados
    console.log('Nome do colaborador: ' + nome);
    console.log('Salário R$: ' + salario.toFixed(2));
    console.log('Aumento: ' + (aumento * 100) + '%');
    console.log('Salário Reajustado: R$' + novoSalario.toFixed(2));

    PerguntarNovamente(); // Perguntar se deseja calcular novamente
}

// Função para perguntar se o usuário deseja calcular novamente
function PerguntarNovamente() {
    let resposta = prompt('Deseja calcular novamente (s/n)');

    if (resposta.toLowerCase() == 's') {
        perguntarColaborador(); // Reiniciar o processo
    } else {
        console.log('Programa encerrado.');
    }
}

// Iniciar o programa
perguntarColaborador();
