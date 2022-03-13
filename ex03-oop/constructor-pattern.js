console.log("=== EXERCÍCIO 03 - OOP ===");


function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, tipo="CC") {
  // propriedades
  this.agencia = agencia;
  this.numero = numero;
  this.digito = digito;
  this.saldo = saldo;
  this.titular = titular;
  this.tipo = tipo;
  this.lançamentos = {saque: [], deposito: [], tranferencia: []};
}

// Métodos e propriedades no Prototype
Conta.prototype.banco = "X - Bank";

Conta.prototype.extrato = function() {
  console.log(`===EXTRATO=${this.titular}===`)
  console.log('===SAQUE===') // SAQUE
  if(this.lançamentos.saque.length == 0){
    console.log('NÃO HOUVE SAQUE!!!')
  }else{
    for(let c = 0; c < this.lançamentos.saque.length; c++){
      p = c + 1
      console.log(`${p}º saque.....R$${this.lançamentos.saque[c]},00`);
    }
  }

  console.log('===DEPÓSITO===') // DEPÓSITO
  if(this.lançamentos.deposito.length == 0){
    console.log('NÃO HOUVE DEPÓSITO!!!')
  }else{
    for(let c = 0; c < this.lançamentos.deposito.length; c++){
      p = c + 1
      console.log(`${p}º depósito.....R$${this.lançamentos.deposito[c]},00`);
    }
  }

  console.log('===TRANSFERÊNCIA===') // TRANSFERÊNCIA
  if(this.lançamentos.tranferencia.length == 0){
    console.log('NÃO HOUVE TRANSFERÊNCIA!!!')
  }else{
    for(let c = 0; c < this.lançamentos.tranferencia.length; c++){
      p = c + 1
      console.log(`${p}º tranferência.....R$${this.lançamentos.tranferencia[c]},00`);
    }
  }
  
  return `SALDO ATUAL.....R$${this.saldo},00`
}

Conta.prototype.depositar = function(valor) {
  this.lançamentos.deposito.push(valor)
  return this.saldo += valor;
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo >= valor) {
    this.lançamentos.saque.push(valor)
    return this.saldo -= valor;
  }

  return "Saldo Insuficiente!";
}

Conta.prototype.transferir = function(valor, contaXxx) {  
  this.sacar(valor); // origem 
  this.lançamentos.saque.pop()
  contaXxx.depositar(valor); // destino
  contaXxx.lançamentos.deposito.pop()
  this.lançamentos.tranferencia.push(valor)
  return this.saldo;
}

const contaMarcos = new Conta(332, 1234, 0, 2000, "MARCOS");
const contaJoao = new Conta(332, 4567, 8, 3000, "JOÃO");

// Conta do João
console.log(contaMarcos);


// Conta da Maria
console.log(contaJoao);

//console.log(contaJoao.transferir(2000, contaMarcos));


// Desafio:

/*
1 - Implementar um método, onde a cada operação executada (ex. saque, deposito, transferia) ela deve ser registrada dentro do objeto (lançamentos)

2 - Implementar um método, onde todos os lançamentos sejam exibidos (extrato)
*/
