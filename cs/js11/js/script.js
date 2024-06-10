function somar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1)|| num1==''){
        alert("Valor inválido para número 1");
        document.getElementById('num1').select();
    }else if (isNaN(num2)|| num2==''){
        alert("Valor inválido para número 2");
        document.getElementById('num2').select();
    }else{
        var somar = parseInt(num1) + parseInt(num2);
        document.getElementById('resultado').innerHTML = somar;
    }
}

function subtrair(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1)|| num1==''){
        alert("Valor inválido para número 1");
        document.getElementById('num1').select();
    }else if (isNaN(num2)|| num2==''){
        alert("Valor inválido para número 2");
        document.getElementById('num2').select();
    }else{
        var subtrair = parseInt(num1) + parseInt(num2);
        document.getElementById('resultado').innerHTML = subtrair;
    }
}

function multiplicar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1)|| num1==''){
        alert("Valor inválido para número 1");
        document.getElementById('num1').select();
    }else if (isNaN(num2)|| num2==''){
        alert("Valor inválido para número 2");
        document.getElementById('num2').select();
    }else{
        var multiplicar = parseInt(num1) + parseInt(num2);
        document.getElementById('resultado').innerHTML = multiplicar;
    }
}

function dividir(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(isNaN(num1)|| num1==''){
        alert("Valor inválido para número 1");
        document.getElementById('num1').select();
    }else if (isNaN(num2)|| num2==''){
        alert("Valor inválido para número 2");
        document.getElementById('num2').select();
    }else{
        var dividir = parseInt(num1) + parseInt(num2);
        document.getElementById('resultado').innerHTML = dividir;
    }
}

function limpar(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    num1.value = null;
    num2.value = null;
    document.getElementById('resultado').innerHTML = null;
}

