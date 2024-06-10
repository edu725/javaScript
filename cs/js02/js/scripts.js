function mostrarParagrafo(){
    document.getElementById('p1').style.visibility = 'visible';
}

function alteraConteudo(){
    document.getElementsByTagName("p")[2].innerHTML= "Texto modificado por JS!";
}

function alteraBotao(){
    var x = document.getElementsByName('btRed');
    alert('Existe(m)'+ x.length + ' elemeto(s) <btRed> nesta pagina.');
    document.getElementsByName('btRed')[0].style.backgroundColor= 'red';
}

function alteraCor(){
    var y = document.getElementsByClassName('divAltera');
    var i;
    for (i = 0; i<y.length; i++){
        y[i].style.backgroundColor = '#837744';
    }
}