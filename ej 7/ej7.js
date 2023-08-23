function contletras (palabra) {
    palabra=(palabra.length)
    return(palabra)
}
palabra= prompt("ingrese una palabra");
palabra2= prompt("ingrese otra palabra");
num=parseInt(contletras(palabra))
num2=parseInt(contletras(palabra2))
if (num>num2){
document.write("la palabra "+palabra+" es mas larga que "+ palabra2);
}
else if (num<num2){
document.write("la palabra "+palabra2+" es mas larga que "+ palabra)
}
else if (num==num2){
document.write("la palabra "+palabra2+" es igual que de largo "+ palabra);
}