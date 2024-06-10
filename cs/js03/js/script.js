function inserirIntemFinal(){
    var novo = document.createElement('li');
    var els = document.getElementsByTagName('ul');
    els[0].appendChild(novo);
    novo.innerHTML = "Binômio de Newton";
}

function inserirIntemBefore(){
    var item = document.createElement('li');
    item.innerHTML = "Binômio de Newton";
    var lista = document.getElementById('mat');
    lista.insertBefore(item, lista.childNodes[2]);
}

function substituiItem(){
    var els = document.getElementsByTagName('li');
    var tamanho = els.length - 1;
    var pos = prompt('Informe a posição do item a ser substituido[0 a'+ tamanho +']');
    els[pos].innerHTML = prompt('Informe a materia');
}

function excluItem(){
    var lista = document.getElementById('mat');
    var els = document.getElementsByTagName('li');
    lista.removeChild(els[0]);
}

function excluiPortugues(){
    var listap = document.getElementById('port');
    var elsp = listap.getElementsByTagName('li');
    listap.removeChild(elsp[0]);
}

function excluiGeografia(){
    var listag = document.getElementById('geo');
    var elsg = listag.getElementsByTagName('li');
    listag.removeChild(elsg[0]);
}

function insereImagem(){
    var img = document.createElement('img');
    img.src = './img/rio.jpg';
    imagem.appendChild(img);
}
