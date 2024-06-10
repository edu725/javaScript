const TEMPO = 20
const INCREMENTO = 5

var direcao_x=1
var direcao_y=1

function inicializaAnimacao(){
    alert("inicializa")
    var objeto = document.getElementById('bola')
    objeto.style.left = '150px'
    objeto.style.top = '50px'
    setInterval(novaPosicao,TEMPO)
}

function novaPosicao(){
    var objeto = document.getElementById('bola')
    
    var x = parseInt(objeto.style.left)
    if((x + direcao_x *  INCREMENTO <= 500 -20)&&(x + direcao_x * INCREMENTO>=0))
        x = x + direcao_x * INCREMENTO
    else{
        direcao_x = -direcao_x
    }

    var y = parseInt(objeto.style.top)
    if((y + direcao_y *  INCREMENTO <= 500 -20)&&(y + direcao_y * INCREMENTO>=0))
        y = y + direcao_y * INCREMENTO
    else{
        direcao_y = -direcao_y
    }

    objeto.style.left=x+"px"
    objeto.style.top=y+"px"
}