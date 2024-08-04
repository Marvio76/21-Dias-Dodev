class Carro {
    constructor(Nome, Potencia, VelocidadeMaxima, Aceleracao) {
        this.Nome = Nome;
        this.Potencia = Potencia;
        this.VelocidadeMaxima = VelocidadeMaxima;
        this.Aceleracao = Aceleracao;
    }

    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao);
        return resultado;
    }
}

class Corrida {
    constructor(Nome, Tipo, Distancia) {
        this.Nome = Nome;
        this.Tipo = Tipo;
        this.Distancia = Distancia;
        this.participantes = [];
        this.vencedor = null;
    }

    definaVencedor() {
        let MenorTempo = this.participantes[0].CalcularTempoMedio(this.Distancia);
        let vencedor = this.participantes[0];

        for (let index = 1; index < this.participantes.length; index++) {
            let tempo = this.participantes[index].CalcularTempoMedio(this.Distancia);
            if (tempo < MenorTempo) {
                MenorTempo = tempo;
                vencedor = this.participantes[index];
            }
        }
        this.vencedor = vencedor;
    }

    exibirVencedor() {
        alert('O vencedor é: ' + this.vencedor.Nome);
    }
}

let corrida = new Corrida('Brasil', 'Formula 1', 60000);
corrida.participantes[0] = new Carro('Vestapem', 230, 560, 30);
corrida.participantes[1] = new Carro('Giovinam', 196, 800, 10);
corrida.participantes[2] = new Carro('Peres', 430, 168, 20);

corrida.definaVencedor();
corrida.exibirVencedor();
