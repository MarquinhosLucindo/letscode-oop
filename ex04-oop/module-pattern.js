console.log("=== EX-04-OOP-CALCULADORA ===");


const MODULE = (function () {
  
  var calculadora = {total:0};  
  
  calculadora.somar = function(num) {
    calculadora.total +=num    
  }  

  calculadora.subtrair = function(num) {
    if(calculadora.total === 0){
      calculadora.total = num
    }else{
      calculadora.total -=num
    }
    
  }

  calculadora.multiplicar = function(num) {
    if(calculadora.total === 0){
      calculadora.total = num
    }else{
      calculadora.total *=num
    }    
  }

  calculadora.dividir = function(num) {    
    if(calculadora.total === 0){
      calculadora.total = num
    }else{
      calculadora.total /=num
    }
  }

  calculadora.limpar= function (){    
    console.clear()
    calculadora.total = 0
    return calculadora.total
  }

  calculadora.resultado= function (){    
    return calculadora.total
  }

  
  return {
    somar: calculadora.somar,
    subtrair: calculadora.subtrair,
    multiplicar: calculadora.multiplicar,
    dividir: calculadora.dividir,
    limpar: calculadora.limpar,
    resultado: calculadora.resultado
  };

})();

console.log(MODULE);
