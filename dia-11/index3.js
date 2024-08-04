//ORDENAR POR PREÇO
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - 1 - i; j++) {
        if (valores[j] > valores[j + 1]) {
            let modeloMaiorValor = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = modeloMaiorValor;

            let anoMaiorValor = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = anoMaiorValor;

            let maiorValor = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = maiorValor;
        }
    }
}

console.log("Carros ordenados pelo preço:");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}
