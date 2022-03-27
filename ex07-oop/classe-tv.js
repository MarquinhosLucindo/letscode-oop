console.log("=== EX - 07 - OOP ===");

class Tv {  
  constructor(marca, cor, polegadas, preco=0) {
    
    this.marca = marca;
    this.cor = cor;
    this.polegadas = polegadas
    this.preco = preco;
    this.status = false;    
    this.volume = {
      min: 0,
      max: 5,
      atual: 0
    }
    this.canal = {
      min: 0,
      max: 5,
      atual: 0
    }
  }
  
  
  
  ligaDesliga() {
    let campoTv = document.getElementById('tv') 
    
    if (this.status == false) {
      this.status = true
      console.log(this.status)
      campoTv.src="./assets/images/tv1.jpg"
      this.mudaVolume(this.volume.atual)
      this.mudaCanal(this.canal.atual)
      
    }else if (this.status == true) {
      this.status = false
      console.log(this.status)
      campoTv.src="./assets/images/tv0.jpg"
      this.mudaVolume(0)      
    }
    
  }

  aumentaVolume() {
    if (this.status && this.volume.atual < this.volume.max) {
      this.volume.atual += 1;
      this.mudaVolume(this.volume.atual)
    }
    
    console.log(this.volume.atual)
  }


  diminuiVolume() {
    if (this.status && this.volume.atual > this.volume.min) {
      this.volume.atual -= 1;
      this.mudaVolume(this.volume.atual)
    }
    
    console.log(this.volume.atual)
    
  }

  aumentaCanal(){
    if(this.status && this.canal.atual < this.canal.max){
      this.canal.atual += 1
      this.mudaCanal(this.canal.atual)
    }
    
     console.log(this.canal.atual)
  }

  diminuiCanal(){
    if(this.status && this.canal.atual > this.canal.min){
      this.canal.atual -= 1
      this.mudaCanal(this.canal.atual)
    }
    
    console.log(this.canal.atual)
  }

  mudaVolume(vol){
    let campoVol = document.getElementById('vol')
    if(vol == 0){
      campoVol.src = "./assets/images/volume0.png"
    }else if(vol == 1){
      campoVol.src = "./assets/images/volume1.png"
    }else if(vol == 2){
      campoVol.src = "./assets/images/volume2.png"
    }else if(vol == 3){
      campoVol.src = "./assets/images/volume3.png"
    }else if(vol == 4){
      campoVol.src = "./assets/images/volume4.png"
    }else if(vol == 5){
      campoVol.src = "./assets/images/volume5.png"
    }
  }

  mudaCanal(ch){
    let campoTv = document.getElementById('tv')
    if(ch == 0){
      campoTv.src="./assets/images/tv1.jpg"
    }else if(ch == 1){
      campoTv.src = "./assets/images/globo.jpg"
    }else if(ch == 2){
      campoTv.src = "./assets/images/sbt.jpg"
    }else if(ch == 3){
      campoTv.src = "./assets/images/band.jpg"
    }else if(ch == 4){
      campoTv.src = "./assets/images/record.jpg"
    }else if(ch == 5){
      campoTv.src = "./assets/images/fox.jpg"
    }
  }

    
}


const tv1 = new Tv("LG", "Black Piano", 32, 1500);
console.log( tv1 ); 



/*
Construa uma classe para gerar um objeto TV 
com as propriedades canal, volume e ligada e 
métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
*/