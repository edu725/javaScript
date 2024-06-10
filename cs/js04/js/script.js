// variáveis globais
var cont = 0
var timer

// funções
// atualiza o contador do cronometro
function atualiza() {
    cont++
    var el = document.getElementById('contador')
    el.innerHTML = cont
}
function ligaTimer(){
    if(cont>0){
        cont = -1
        atualiza()
    }
    timer = setInterval(atualiza,1000)
    var bt_liga = document.getElementById('liga')
    bt_liga.disabled = true
    var bt_desliga = document.getElementById('desliga')
    bt_desliga.disabled = false
}
function desligaTimer(){
    timer = clearInterval(timer)
    var bt_liga = document.getElementById('liga')
    bt_liga.disabled = false
    var bt_desliga = document.getElementById('desliga')
    bt_desliga.disabled = true
}

function cicloVermelho(){
    acende(true,false,false)
    setTimeout(cicloVerde, 2000)
    console.log('cicloVermelho')
}
function cicloAmarelo(){
    acende(false,true,false)
    setTimeout(cicloVermelho, 2000)
    console.log('cicloAmarelo')
}
function cicloVerde(){
    acende(false,false,true)
    setTimeout(cicloAmarelo, 2000)
    console.log('cicloVerde')
}

function acende(est_vermelho, est_amarelo, est_verde){
    var el_vermelho = document.getElementById('vermelho')
    var el_amarelo = document.getElementById('amarelo')
    var el_verde = document.getElementById('verde')

    el_vermelho.style.backgroundColor = est_vermelho?"red":"white"
    el_amarelo.style.backgroundColor = est_amarelo?"yellow":"white"
    el_verde.style.backgroundColor = est_verde?"green":"white"
}