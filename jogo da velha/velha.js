const exibicaoPlayer = document.querySelector('.player')

let selected;
let player = 'X'

let positionsWinner = [
    //horizontal
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    //vertical
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    //diagonal
    [1, 5, 9],
    [3, 8, 7],
]

function iniciar() {
    selected = [] // começa vazio
    exibicaoPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`

    //butões
    //pra cada (forEach) botao execute item
    document.querySelectorAll('.game button').forEach((item) => { //ser iniciado
        item.innerHTML = '' //terá valor vazio
        item.addEventListener('click', newMove) // e um evento sera acionando ao clicar
    })
}

iniciar()

function newMove(e) { // e = evento que ocorreu (click)
    const index = e.target.getAttribute('data-i') //declaração do data-i(getAttribute(data-i)); e.target é o elemento clicado
    e.target.innerHTML = player //adiciona player = 'x' ou 'O'
    e.target.removeEventListener('click', newMove)
    selected[index] = player // vai adicionar ao selected a posição do player, index = data-i, e player x ou o ;

    //MELHOR COMPREENSÃO: o selected é um array que chama os botoes, onde vai ser coletado o seu data-i, que é um número, e esse numero vai ser utilizado como index, ou seja, ira de 1 ate 9, e cada index tera seu valor: x, o ou vazio, como se ele fosse um mapa que guarda as localizaçoes que ja estao ocupadas (e por quem) ou vazias;

    setTimeout(() => { check() }, [100]) // espere 1 milesimo e rode check

    player = player === 'X' ? "O" : "X" // se player for x, troque para O, se não X
    exibicaoPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`
}

//checar
function check() {
    let ultimoMovePlayer = player === "X" ? "O" : "X"
    // se o player atual é x entao o ultimo player foi O e vice-versa
    //pq o ultimo jogador? pq check() costuma ser chamado depois que o player atual já trocou.


    //PEGANDO TODOS OS MOVIMENTOS DO ULTIMO PLAYER
    const items = selected //selected é um array q guarda a posição selecionado pelo player
        .map((item, i) => [item, i])//localizar a posição(i = index) do item(x ou o) criando um array com dois valores
        .filter((item) => item[0] === ultimoMovePlayer) //Filtra os itens selecionados q batem com o ultimo player
        //pq item[0], pq foi criado dois valores dentro do array item [item , i] 0 representa o player
        .map((item) => item[1]) //pega os indices desse player filtrado

    //Checar se ganhou
    for (pos of positionsWinner) {
        if (pos.every((item) => items.includes(item))) {
            alert("O JOGADOR '" + ultimoMovePlayer + "' GANHOU!")
            iniciar()
            return
        }
    }
    //Checar se deu empate
    if (selected.filter((item) => item).length === 9) {
        alert('DEU EMPATE!')
        iniciar()
        return
    }
}
