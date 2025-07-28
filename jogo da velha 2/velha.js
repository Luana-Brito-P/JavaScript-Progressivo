
let tabuleiro = []
let jogador = 'X'
let exibtab, aviso

function inicia() {
    tabuleiro = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]


    exibtab = document.getElementById('exibtab')
    aviso = document.getElementById('aviso')

    exibe(tabuleiro)
    aviso.innerHTML = `Jogador da vez: ${jogador}`
}

function exibe(tabuleiro) {
    let texto = ''
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === 0) {
                texto += '_ '
            } else if (tabuleiro[i][j] === 1) {
                texto += 'X '
            } else if (tabuleiro[i][j] === -1) {
                texto += 'O '
            }
        }
        texto += '<br>'
    }
    exibtab.innerHTML = texto
}

function jogar() {
    let lin = parseInt(document.getElementById('lin').value) - 1
    let col = parseInt(document.getElementById('col').value) - 1


    if (tabuleiro[lin][col] === 0) {
        if (jogador === 'X') {
            tabuleiro[lin][col] = 1 //jagador 1 - x

        } else {
            tabuleiro[lin][col] = -1 // jogador 2 - O

        }

        exibe(tabuleiro)

        if (checar(tabuleiro)) {
            return //alguém venceu, entao n troca
        }

        if (empate(tabuleiro)) {
            aviso.innerHTML = `Empate! Nimguém venceu`
            return
        }

        jogador = (jogador === 'X') ? 'O' : 'X'// faz a troca
        aviso.innerHTML = `Jogador da vez: ${jogador}`

    } else {
        alert('Este campo ja foi marcado')
    }


}

function checar(tabuleiro) {
    //Verificar linhas
    for (let i = 0; i < 3; i++) {
        let soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]

        if (soma === 3 || soma === -3) {
            aviso.innerHTML = `Vitória na linha ${i + 1}: ${soma === 3 ? 'X' : 'O'} venceu!`
            return true
        }
    }

    //Verificar colunas
    for (let j = 0; j < 3; j++) {
        let soma = tabuleiro[0][j] + tabuleiro[1][j] + tabuleiro[2][j]

        if (soma === 3 || soma === -3) {
            aviso.innerHTML = `Vitória na coluna ${j + 1}: ${soma === 3 ? 'X' : 'O'} venceu!`
            return true
        }
    }

    //Verificar diagonal principal
    let diag1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]

    if (diag1 === 3 || diag1 === -3) {
        aviso.innerHTML = `Vitória na diagonal principal: ${diag1 === 3 ? 'X' : 'O'} venceu!`
        return true
    }

    //Verificar diagonal secundária
    let diag2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0]

    if (diag2 === 3 || diag2 === -3) {
        aviso.innerHTML = `Vitória na diagonal secundária: ${diag2 === 3 ? 'X' : 'O'} venceu!`
        return true
    }

    return false // se n ser 3 ou -3 retorne false
}

function empate(tabuleiro){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (tabuleiro[i][j] === 0){
                return false // Ainda tem jogada possível
            }
        }
    }
    return true // Não tem mais espaços vazios
}