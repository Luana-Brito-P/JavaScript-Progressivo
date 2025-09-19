var biblioteca = [ //Array

    {
        titulo: 'Bill Gates',
        autor: 'The Road Ahead',
        status_leitura: true
    },
    {
        titulo: 'Steve Jobs',
        autor: 'Walter Isaacson',
        status_leitura: true
    },
    {
        titulo: 'A Esperança: O Último Livro de Jogos Vorazes',
        autor: 'Suzanne Collins',
        status_leitura: false
    }
]

for(let i = 0; i < biblioteca.length; i++)
{
    let livro = "'" + biblioteca[i].titulo + "' de " + biblioteca[i].autor + '.'
    if(biblioteca[i].status_leitura) {
        console.log("Já leu " + livro)
    }
    else {
        console.log("Você ainda precisa ler: " + livro)
    }
}