let valor
let quantidade
let opção= prompt('Bem vindo ao Dodev-thru, vc deseja abastecer com gasolina? digite 1!, abastecer com álcool? digite 2!, calibrar os pneus? digite 3!')

switch (opção){
    case "1":
        valor = parseInt (prompt('Digite o valor desejado para abastecer'))
        quantidade = valor / 5
        console.log ('Foram abastecidos '+ quantidade + 'L de gasolina')
        break;
    case "2":
        valor = parseInt (prompt('Digite o valor desejado para abastecer'))
        quantidade = valor / 3
        console.log ('Foram abastecidos '+ quantidade + 'L de álcool')
        break;
    default:
        console.log('Pneus calibrados com sucesso')
        break;
}
