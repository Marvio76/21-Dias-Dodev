class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor (id,nome,categoria,endereco,telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

//CRIANDO CLASSE RESERVA
class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor (id,idHotel, responsavel, diaEntrada, diaSaida){
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

// CRIANDO ARRAY
let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

//FUNÇÃO PARA CADASTRAR HOTEL
function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel");
    let categoria = parseInt(prompt("Digite a categoria do hotel"));
    let endereco = prompt("Digite o endereço do hotel");
    let telefone = prompt("Digite o telefone do hotel");
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++;
    hoteis.push(hotel);
}

//FUNÇÃO PARA CADASTRAR RESERVA
function CadastrarReserva() {
    let idHotel;
    let existe = false;
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"));
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length;
                existe = true;
            } else if (i == hoteis.length - 1) {
                console.log("id de hotel não cadastrado");
            }
        }
    } while (!existe);

    let nome = prompt("Digite o nome do responsável");
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"));
    let diaSaida;
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída"));
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior que o dia de entrada");
        }
    } while (diaSaida < diaEntrada);

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
    idReserva++;
    reservas.push(reserva);
}

// função para procurar reservas pelo hotel
function ProcurandoHotelPelaReserva (idReserva){
    let idHotel = reservas [idReserva - 1].IdHotel
    console.log('Hotel:', hoteis[idHotel - 1].Nome)
    console.log('endereço:', hoteis [idHotel - 1].Endereco)
    console.log('dia de entrada:', reservas [idReserva -1].DiaEntrada)
    console.log('dia de saída:', reservas [idReserva - 1].DiaSaida)
}
// FUNÇÃO PARA PROCURAR RESERVA PELO RESPONSÁVEL

function ProcurarReservaPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome === reservas[i].Responsavel) {
            console.log("ID da Reserva:", reservas[i].Id);
            console.log("Hotel:", hoteis[reservas[i].IdHotel - 1].Nome);
        }
    }
}

// FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA

function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = [];

    for (let i = 0; i < hoteis.length; i++) {
        if (categoria === hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome);
        }
    }

    return hoteisProcurados;
}
// FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL

function AtualizarTelefone(IdHotel, telefone) {
    hoteis[IdHotel - 1].Telefone = telefone;
    console.log("Número de telefone atualizado!");
}

// FUNÇÃO DE MENU INTERATIVO

let continuar = true;

while (continuar) {
    let opcao = prompt("Escolha uma opção:\n1 - Cadastrar hotel\n2 - Cadastrar reserva\n3 - Procurar reserva pelo hotel\n4 - Procurar hotel pela reserva\n5 - Procurar reserva pelo responsável\n6 - Procurar hotéis por categoria\n7 - Atualizar telefone do hotel\n8 - Encerrar o programa");

    switch (parseInt(opcao)) {
        case 1:
            CadastrarHotel();
            break;
        case 2:
            CadastrarReserva();
            break;
        case 3:
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva:"));
            break;
        case 4:
            ProcurarHotelPelaReserva(parseInt(prompt("Digite o ID da reserva:")));
            break;
        case 5:
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva:"));
            break;
        case 6:
            let hoteisProcurados = ProcurarHotelPelaCategoria(prompt("Digite a categoria que deseja procurar:"));
            console.log(hoteisProcurados);
            break;
        case 7:
            let IdHotel = parseInt(prompt("Digite o ID do hotel que deseja atualizar:"));
            let telefone = prompt("Digite o novo telefone:");
            AtualizarTelefone(IdHotel, telefone);
            break;
        case 8:
            console.log("Programa encerrado.");
            continuar = false;
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}
