const conta = {
    saldo: 1000, //1parametro
    get mostrarSaldo() { //2parametro
        return 'R$ '+ this.saldo
    },
    set depositar(valor){ //3parametro
        this.saldo += valor
    }
}

conta.depositar = 500;
console.log(conta.mostrarSaldo);