console.log('===EX01-OOP===')

const pessoa = {}

pessoa['cor da pele'] = 'Preta'
pessoa['cor dos olhos'] = 'Preto'
pessoa['cor do cabelo'] = 'Preto'
pessoa.sexo = 'Masculino'
pessoa.idade = 22
pessoa.peso = 75
pessoa.altura = 1.75

pessoa.comer = function () {
    return 'Comendo!!!'
}
pessoa.dormir = function () {
    return 'Dormindo!!!'
}
pessoa.acordar = function () {
    return 'Acordando!!!'
}
pessoa.andar = function () {
    return 'Andando!!!'
}
pessoa.correr = function () {
    return 'Correndo!!!'
}

console.log(pessoa)
console.log(pessoa['cor da pele'])
console.log(pessoa.idade)
console.log(pessoa.comer())
console.log(pessoa['andar']())