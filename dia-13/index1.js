// CRIANDO CLASS
class Computador {
    tipo
    modelo
    video
    Armazenamento
    MemoriaRam
    SSD 
    constructor (tipo, modelo, video, Armazenamento, MemoriaRam, SSD){
        this.tipo = tipo
        this.modelo = modelo
        this.video = video
        this.Armazenamento = Armazenamento
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD
    }
    exibindoinformação(){
        console.log('Exibindo informações do meu computador')
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Video: ${this.video}`)
        console.log(`Armazenamento: ${this.Armazenamento}`)
        console.log(`MemoriaRam: ${this.MemoriaRam}`)
        console.log(`SSD: ${this.SSD}`)
    }
}
// CRIANDO OBJETO
const comp = new Computador ('notebook','Ryzen 8','Integrado',600,23,false)
comp.exibindoinformação();