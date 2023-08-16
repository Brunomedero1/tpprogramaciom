
//
var lado1 = prompt("ingresar cuanto mide un lado del cuadrado");
var operacion = prompt("que desea realizar? P=perimetro, A=area/superficie");


if(operacion == "A") {
    area(lado1)
}
if(operacion == "P") {
    perimetro(lado1)
}

function area(lado1) {
    var total = lado1 * lado1
    document.write("el area del cuadrado es "+ total);
}
function perimetro(lado1) {
    var total2 = parseInt(lado1) + parseInt(lado1) + parseInt(lado1) + parseInt(lado1) 
    document.write("el perimetro del cuadrado es " + total2);
}
