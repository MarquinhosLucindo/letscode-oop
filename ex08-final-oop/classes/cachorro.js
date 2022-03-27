import { Animal } from "./animal.js";

// Herança
// new Televisao("7", lg, 100, false, 55)
class Cachorro extends Animal {
  constructor (grupo=null, domestico=null, num_patas=null, som='Au au!!!') {
    super(grupo, domestico, num_patas);
    this.#som = som;
  }
  #som

  latir(){
    return this.#som
  }

  //método sobresrito
  mover() {
    return 'Cachorro correndo e balançando o rabinho!!!';
  }
}


export { Cachorro };
