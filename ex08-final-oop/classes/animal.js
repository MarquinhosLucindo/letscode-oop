class Animal {
  constructor(grupo=null, domestico=null, num_patas = null) {    
    this.#grupo = grupo;
    this.#domestico = domestico;
    this.#num_patas = num_patas;    
  }

  // props
  
  #grupo
  #domestico
  #num_patas


  get grupo() {
    return this.#grupo;
  }

  get domestico() {
    return this.#domestico;
  }

  get num_patas() {
    return this.#num_patas;
  }

  comer() {
    return 'Comendo!!!';
  }

  emitirSom() {
    return 'Emitindo som!!!';
  }

  mover() {
    return 'Movendo!!!';
  }

  
}
  

export { Animal };
