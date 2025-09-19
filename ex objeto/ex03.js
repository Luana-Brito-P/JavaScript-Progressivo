var estudante = {
    nome: "Luana Brito",
    idade: 19,
    turma: "3° Série"
}

console.log(Object.keys(estudante).length)

// Object.keys(obj) → retorna um array com as chaves (propriedades). 
    // se colocar .length dps, a função length funcionara pois agr o objeto sera um array
// Object.values(obj) → retorna um array com os valores.
//Object.entries(obj) → retorna um array de pares [chave, valor].


//use a propriedade prototype para adicionar uma propriedades a todos os objetos
// ex: Car.prototype.color = "red"