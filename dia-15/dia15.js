// Declarando arrays que vamos utilizar
let arrayUm = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayDois = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

// Declarando a função com os parâmetros pedidos
function AcharNumerosEmComum(arrayUm, arrayDois) {
    let resultado = []; // Declarando array de números em comum
    let contadorResultado = 0; // Contador desse array

    // O primeiro FOR percorre o arrayUm
    for (let i = 0; i < arrayUm.length; i++) {
        // O segundo FOR percorre o arrayDois, para cada número de arrayUm
        for (let j = 0; j < arrayDois.length; j++) {
            // Compara com todos os números de arrayDois
            if (arrayUm[i] === arrayDois[j]) {
                // Se a comparação for bem-sucedida, adiciona esse número no array de resultado
                resultado[contadorResultado] = arrayUm[i];
                contadorResultado++;
                // Encerrando a verificação para esse número e evitando números duplicados
                j = arrayDois.length;
            }
        }
    }
    return resultado;
}

// Testando a função
console.log(AcharNumerosEmComum(arrayUm, arrayDois));
