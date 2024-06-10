function inicializa(){
    alert('inicializa!');
    var bt = document.getElementById('botao');
    bt.onclick = consultaCEP;
}
function limpaTexto(){
    var texto = document.getElementById('cep');
    texto.value = '';
}
function consultaCEP(){
    var cep = document.getElementById('cep');
    var div = document.getElementById('resposta');
    var url = 'https://viacep.com.br/ws/'+cep.value+'/json/';
    console.log(url);
    
    var request = new XMLHttpRequest();
    request.open('GET',url);

    request.onerror = function(e){
        div.innerHTML = 'VALOR INVÁLIDO!';
    }
    request.onload =()=>{
        var response = JSON.parse(request.responseText);
        if(response.erro === true){
            div.innerHTML = 'CEP NÃO ENCONTRADO!';
        } else {
            div.innerHTML = 'CEP:' + response.cep+'<br>'+'Logradouro: '+ response.logradouro +'<br>'+'Bairro: '+response.bairro + '<br>'+ 'Cidade/UF: '+response.localidade+'/'+response.uf;
        }
            

    }
    request.send();
}