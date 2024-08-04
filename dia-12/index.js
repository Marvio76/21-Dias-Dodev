let nomes = []
let senhas = []
let contador = 0

let continuar = true

while(continuar){
    let opc =  prompt('O que deseja fazer? 1 - Cadrastro / 2 - Login / 3 - Excluir / 4 - Encerrar')

    switch (opc){
        // Criando cadastro
        case '1' :
            nomes [contador] = prompt ('Qual o nome?')
            senhas [contador] = prompt ('Qual a senha?')
            contador++
            break;

            // criando login
        case '2' :
            let nome = prompt ('Qual o nome?')
            let senha = prompt ('Qual a senha?')
            let loginfeito = false
            
            for(let g= 0; g < nomes.length; g++){
                if(nome == nomes[g] && senha == senhas[g]){
                    loginfeito = true
                }
            }
            if (loginfeito) {
                alert ('Login feito com sucesso. Bem vindo!')
            } else {
                alert ('Login ou senha incorretos. Tente novamente!')
            }
            break;

            // Criando Excluir
        case '3' :
            let nomeexcluir = prompt ('Qual nome deseja excluir?')
            let nomeLEX = []
            let senhaLEX = []
            let contadorLEX = 0

            for(let g= 0; g < contador; g++){
                if(nomeexcluir == nomes[g]){
                    alert ('Cadrastro excluído com sucesso')
                } else{
                    nomeLEX = [contadorLEX] = nomes[g]
                    senhaLEX = [contadorLEX] = senhas[g]
                    contadorLEX++
                }
            }
            nomes = nomeLEX
            senhas = senhaLEX
            contador--
            break

            // criando Encerrar
        case '4' :
            continuar = false
            break;
        default:
            console.log ('Opção invalida, escolha outra!')
            break

            // fução para encontra o índice de um nome no array de nomes
            function encontraindice (nome){
                for (let g= 0; g < nomes.length; g++) {
                    if (nomes[i] === nome ){
                        return i;
                    }
                }
            return -1;
            }
    }
}