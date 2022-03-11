console.log ( "=== USO DO THIS ===" ) ;

/*
Conceitos - O que é um objeto?
        |------------|
        | OBJETO |
        | -----------|
        /\
     CARACTERÍSTICAS
        |-----------|
        | CARRO |
        | ----------|
       /\
    PROPS MÉTODOS
    marca ligar()
    cor desativar()
    ano acelerar()
    modelo freia()
    veloMin
    veloMax
*/

var  auto  =  { 
  marca : "Fiat" , 
  modelo : "Uno" ,
  cor : "vermelho" ,
  ano : 1999 ,
  velocidade : {
    min : 0 ,
    máximo : 10 ,
    atual : 0 
  } ,
  status : false ,  // desligado
  ligar : function ( )  {
    return  this.estado  =  verdadeiro ;
  } ,
  desativar : função ( )  {
    return  this.estado  =  falso ;
  } ,
  acelerar : function ( )  {
    if  ( this.velo.atual  ==  this.velo.max )  {
      return  this.velocidade.atual ;
    }  else  if ( this.status  ==  true )  {
      retorne  ++ this.velocidade.atual ;
    }  senão  {
      return  this.velocidade.atual ;
    }
  } ,
  freiar : função( )  {
    if ( this.velo.atual  ==  this.velo.min )  {
      return  this.velocidade . atual ;
    }  senão  {
      retornar  -- this.velocidade . atual ;
    }
  }
} ;

consola . log ( automático ) ;
consola . log ( auto.modelo , auto.ano ,  auto.cor , auto.velo.max ) ; _  _ _ _ _ _ _ _ _ _ 
