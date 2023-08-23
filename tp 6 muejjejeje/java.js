//6

function mayor(numerouno, numerodos) {
    if (numerouno>numerodos) {
        document.write("el numero mayor es " + numerouno);
    }
    else if (numerodos>numerouno){
        document.write("el numero mayor es "+ numerodos);
    }
    else if(numerodos == numerouno){
        document.write("los numeros son iguales");
    }
}


var numerouno = parseInt(prompt("ingrese un numero "));
var numerodos = parseInt(prompt("ingrese otro numero "));
mayor(numerouno, numerodos)