function detecta(event){
    let tecla = event.key //adiciona a tecla q foi pressionada
    
    if(tecla =='a')
        alert("Você apertou 'a'")
    if(tecla =='e')
        alert("Você apertou 'e'")
    if(tecla =='i')
        alert("Você apertou 'i'")
    if(tecla =='o')
        alert("Você apertou 'o'")
    if(tecla =='u')
        alert("Você apertou 'u'")
}

/*
Propriedades do objeto KeyboardEvent

altKey - Retorna se ALT foi pressionada
charCode - Retorna o código unicode do caractere digitado
code - Retorna o código da tecla pressionada (cada tecla tem seu número, seu código)
ctrlKey - Retorna se a tecla CTROL foi pressionada
getModifierState() - Retorna se determinada teclada está ativada
key - Retorna a teclada digitada e detectada pelo evento
keyCode - Retorna o código Unicode da tecla que disparou o evento onkeypress, ou onkey down ou onkeyup
location - Retorna a localização da tecla no teclado
metaKey - Retorna se uma tecla "meta" foi pressionada
repeat - Retorna se uma teclada está sendo mantida pressionada ou não
shiftKey - Retorna se a tecla SHIFT foi pressionada ou não
*/