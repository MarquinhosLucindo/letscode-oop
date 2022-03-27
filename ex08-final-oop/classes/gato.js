import { Animal } from "./animal.js";

// Herança
class Gato extends Animal {
  constructor (grupo=null, domestico=null, num_patas=null, som='Mia, miau!!!') {
    super(grupo, domestico, num_patas);
    this.#som = som;
  }
  #som

  miar(){
    return this.#som
  }
 
  //método sobresrito
  mover() {
    return 'Gato correndo e pulando!!!';
  }
}

export { Gato };
