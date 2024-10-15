let nomes = [];
let senhas = [];

// função pra solicitar a opção ao usuário
function perguntandoUsuario() {
    let opcao = prompt('O que deseja fazer: \n1. cadastrar, \n2. fazer login, \n3. excluir um cadastro ou \n4. encerrar o programa.');
    return opcao;
}

// função para solicitar nome e senha ao usuário
function cadastrarUsuario() {
    nomes.push(prompt('Digite o seu nome:'));
    senhas.push(prompt('Digite sua senha:'));
}

// função para fazer login
function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] === senha) {
        return true;
    } else {
        return false;
    }
}

// função para excluir um cadastro
function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log('Cadastro excluído com sucesso');
    } else {
        console.log('Usuário não encontrado.');
    }
}

// fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
    let opcao = perguntandoUsuario();

    switch (opcao) {
        case '1':
            cadastrarUsuario();
            break;
        case '2':
            let nome = prompt('Digite seu nome:');
            let senha = prompt('Digite sua senha:');
            let login = fazerLogin(nome, senha);
            if (login) {
                console.log('Login feito com sucesso');
            } else {
                console.log('Nome ou senha incorretos!');
            }
            break;
        case '3':
            nome = prompt('Digite seu nome:');
            excluirCadastro(nome);
            break;
        case '4':
            continuar = false;
            console.log('Programa encerrado.');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }
}
