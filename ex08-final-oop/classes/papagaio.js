import { Animal } from "./animal.js";

class Papagaio extends Animal {
    constructor (grupo=null, domestico=null, num_patas=null, som='Loro, loro!!!') {
        super(grupo, domestico, num_patas);
        this.#som = som;
    }
    #som
    
    falar(){
        return this.#som
    }

    //método sobresrito
    mover() {
        return 'Papagaio voando!!!';
    }

}

export { Papagaio };
