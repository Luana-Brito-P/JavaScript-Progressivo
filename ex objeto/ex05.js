const pessoa = {
    nome: "Luana",
    idade: 19,
    instrumento: "Violino"
}

// for (let key in pessoa) { // usar for ... in para iteração
//     console.log(key, pessoa[key])
// }

// ou usando forEach, transformando os valores do objeto em array
const obj = Object.values(pessoa) 

obj.forEach((obj, indice) => {
    console.log(indice, obj)
});