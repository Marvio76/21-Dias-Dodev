//Entrada de dados
let nome= prompt ('Digite se nome');
let idade= parseInt (prompt('Digite sua idade'));
let cartademotorista= prompt ('Possuí carta de motorista? (sim/não)');
let temcarro= prompt ('Tem algum carro? (sim/não)');
//Saida de dados
if (idade < 18 || cartademotorista == 'não'){
    console.log(nome + ", voce não pode dirigir");
}
if (idade >= 18 && cartademotorista == 'sim'&& temcarro == "não" ){
    console.log(nome + ', voce pode dirigir mas não tem um carro');
}
if (idade >= 18 && cartademotorista == 'sim'&& temcarro == "sim"){
    console.log(nome + ' voce será o motorista!');
}