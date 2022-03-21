console.log("=== EX - 06 - OOP ===");


class Tv {
  
  constructor(marca, cor, polegadas, preco=0) {
    
    this.marca = marca;
    this.#cor = cor;
    this.#polegadas = polegadas
    this.#preco = preco;
    this.status = false;    
    this.volume = {
      min: 0,
      max: 20,
      atual: 0
    }
    this.canal = {
      atual: 1,
      max: 10     
    }
  }

  #cor
  #polegadas
  #preco

  
   
  liga() {
    return this.status = true;
  }

  desliga() {
    return this.status = false;
  }

  aumentaVolume() {
    if (this.status && this.volume.atual < this.volume.max) {
      this.volume.atual += 1;
    }

    return this.volume.atual;
  }

  diminuiVolume() {
    if (this.status && this.volume.atual > this.volume.min) {
      this.volume.atual -= 1;
    }

    return this.volume.atual;
  }

  mudaDeCanal(){
    if(this.status && this.canal.atual < this.canal.max){
      this.canal.atual += 1
    }else{
      this.canal.atual = 1
    }
    return this.canal.atual
  }

  get preco() {
    return this.#preco;
  }

  get polegadas(){
    return this.#polegadas
  }

  get cor(){
    return this.#cor
  }

    
}


const tv1 = new Tv("LG", "Black Piano", 32, 1500);
console.log( tv1 ); 

const tv2 = new Tv("Samsumg", "Black", 42, 2000);
console.log( tv2 );

/*
Construa uma classe para gerar um objeto TV 
com as propriedades canal, volume e ligada e 
métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
*/

 
