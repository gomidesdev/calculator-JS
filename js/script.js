var result = document.querySelector("#result");

function insert(a) {
  var numero = document.querySelector("#result").innerHTML;
  result.innerHTML = numero + a;
}

function clean() {
    result.innerHTML = "";
}

function back(){
    var resultado = document.querySelector("#result").innerHTML;
    document.querySelector("#result").innerHTML = resultado.substring(0, resultado.length -1);
}

function equal(){
    var resultado = document.querySelector("#result").innerHTML;
    if(resultado){
        result.innerHTML = eval(resultado);
    }
}