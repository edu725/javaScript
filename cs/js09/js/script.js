function draw(){
    retangulo()
    circulo()
    smile()
    sobreposicao()
    cores()
}

function retangulo(){
    const canvas = document.getElementById('retangulo')
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#5Ab09A'
    ctx.fillRect(10,10,150,100)
}

function circulo(){
    var c = document.getElementById('circulo')
    var ctx = c.getContext('2d')
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.arc(70,75,60,0,2 * Math.PI)
    ctx.lineWidth = 10
    ctx.strokeStyle = 'orange'
    ctx.fill()
    ctx.stroke()
}

function smile(){
    var canvas = document.getElementById('smile')

    if(canvas.getContext){
        var ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.arc(75,75,50,0, Math.PI * 2, true)
        ctx.moveTo(110,75)
        ctx.arc(75,75,35,0, Math.PI, false)
        ctx.moveTo(65,65)
        ctx.arc(60,60,5,0,Math.PI * 2, true)
        ctx.moveTo(95,65)
        ctx.arc(90,60,5,0,Math.PI * 2, true)
        ctx.fillStyle = 'white'
        ctx.lineWidth = 2
        ctx.strokeStyle = 'orange'
        ctx.fill()
        ctx.stroke()
    }
}

function sobreposicao(){
    var canvas = document.getElementById('sobreposicao')
    
    if(canvas.getContext){
        var ctx = canvas.getContext('2d')

        ctx.fillStyle = "rgb(47,72,80)"
        ctx.fillRect(10,10,55,50)

        ctx.fillStyle = "rgb(0,113,132)"
        ctx.fillRect(30,30,55,50)

        ctx.fillStyle = "rgba(47,72,88,0.5)"
        ctx.fillRect(50,50,55,50)
    }
}

function cores(){
    var ctx = document.getElementById('cores').getContext('2d')
    for(var i = 0;i < 6;i++){
        for(var j = 0;j < 6;j++){
            ctx.fillStyle = 'rgb(' + Math.floor(220 - 32.5 * i) + ',' + Math.floor(190 -22.5 * j) + ',0)'
            ctx.fillRect(j*25,i*25,25,25)
        }
    }
}