var contador = 0;
var bt = document.getElementById('btCont');
var btt = document.getElementById('btLimpa');
bt.onclick=()=>{
    contador ++;
    var el = document.getElementById('cont');
    el.innerHTML = contador;
}
btt.onclick=()=>{
    contador = 0;
    var el = document.getElementById('cont');
    el.innerHTML = contador;
}