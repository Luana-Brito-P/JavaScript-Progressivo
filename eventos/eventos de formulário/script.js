window.onload = function(){
    function dentro(){
        document.getElementById('meuInput').style.background = 'red'
    }
    function fora(){
        document.getElementById('meuInput').style.background = 'blue'
    }
    document.getElementById('meuInput').addEventListener('focus', dentro)
    document.getElementById('meuInput').addEventListener('blur',fora)
    //no html é onfocus = '' || onblur = ''
}