console.log("=== EX-04-OOP-CALCULADORA ===");


const MODULE = (function () {
  
  var calculadora = {};
  var result = 0;
  
  calculadora.somar = function(num) {
    result +=num    
  }  

  calculadora.subtrair = function(num) {
    if(result === 0){
      result = num
    }else{
      result -=num
    }
    
  }

  calculadora.multiplicar = function(num) {
    if(result === 0){
      result = num
    }else{
      result *=num
    }    
  }

  calculadora.dividir = function(num) {    
    if(result === 0){
      result = num
    }else{
      result /=num
    }
  }

  calculadora.limpar= function (){    
    console.clear()
    result = 0
    return result
  }

  calculadora.resultado= function (){    
    return result
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
