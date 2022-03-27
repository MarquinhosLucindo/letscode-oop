
//import { Animal } from "./classes/animal.js";
import { Cachorro } from "./classes/cachorro.js";
import { Gato } from "./classes/gato.js";
import { Papagaio } from "./classes/papagaio.js";



const gato = new Gato("Vertebrado", 'Sim' ,4);
console.log(gato)
console.log(gato.emitirSom()) // método da classe pai
console.log(gato.miar()) // método da classe filho
console.log(gato.num_patas)
console.log(gato.comer())
console.log(gato.mover())


const cachorro = new Cachorro("Vertebrado", 'Sim' ,4);
console.log(cachorro)
console.log(cachorro.emitirSom()) // método da classe pai
console.log(cachorro.latir()) // método da classe filho
console.log(cachorro.num_patas)
console.log(cachorro.comer())
console.log(cachorro.mover())


const papagaio = new Papagaio("Vertebrado", 'Sim' ,2);
console.log(papagaio)
console.log(papagaio.emitirSom()) // método da classe pai
console.log(papagaio.falar()) // método da classe filho
console.log(papagaio.num_patas)
console.log(papagaio.comer())
console.log(papagaio.mover())



