console.log('===EX02-OOP===')

const pessoa = {
    //PROPRIEDADES
    cor: 'Preta',
    olhos: 'Preto',
    cabelo: 'Preto',
    genero: 'Masculino',
    idade : 22,
    peso: {atual: 75, ganho:0, perdido:0},
    caloria: 0,
    altura : 1.75,
    
    //MÉTODOS
    comer: function(){
        
        this.caloria += 1400
        if(this.caloria == 7000){
            this.peso.ganho = 1
            this.peso.atual += this.peso.ganho
            this.caloria = 0
            return `Você ganhou ${this.peso.ganho}Kg, seu peso atual agora é ${this.peso.atual}`
        }else{
            this.caloria.ganha += this.caloria
            return `Comeu e ganhou ${this.caloria} calorias`
        }
        

    },

    treinar: function(){
        this.caloria -= 1400
        if(this.caloria == -7000){
            this.peso.perdido = 1
            this.peso.atual -= this.peso.perdido
            this.caloria = 0
            return `Você treinou muito e perdeu ${this.peso.perdido}Kg, seu peso atual agora é ${this.peso.atual}`
        }else{
            let cal_abs = Math.abs(this.caloria);
            return `Treinou e perdeu ${cal_abs} calorias`
        }

    },

    dormir: function(){

    },

    acordar: function(){

    },

    andar: function(){
        return 'Andando!!!'
    },

    correr: function(){
        return 'Correndo!!!'
    }



}


console.log(pessoa)
//console.log(pessoa.cor)
//console.log(pessoa.idade)
//console.log(pessoa.comer())
//console.log(pessoa.andar())