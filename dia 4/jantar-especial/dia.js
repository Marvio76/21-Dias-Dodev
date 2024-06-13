//Entrada de dados
let fome = prompt("Está com fome? (sim/não)");
let dinheiro = prompt ('Tem dinheiro? (sim/não)');
let restaurante = prompt ('O restaurante está aberto? (sim/não)');
// saida de dados
if (fome == 'não' || dinheiro == 'não' ){
    console.log('Hoje a janta será em casa')
}
if (fome == 'sim' && dinheiro == 'sim' && restaurante == 'não' ){
    console.log('Peça um delivery!')
}
if (fome == 'sim' && dinheiro == 'sim' && restaurante == 'sim' ){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}