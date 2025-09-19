function Animal(nome) {
    this.nome = nome; //o nome deste animal é (nome inserido pelo o usuário)
}

//adicionando uma nova propriedade ao objeto falar. que na vdd é um metodo (função)

Animal.prototype.falar = function(){
    console.log(this.nome + " fez um som")
}


//Adicionando um valor ao parametro nome ao objeto Animal q é um objeto de cachorro
const cachorro = new Animal ("Rex")
cachorro.falar()