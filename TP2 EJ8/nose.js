function sp (num1,num2,num3){
    totalsum=num1+num2+num3
    totalprom=totalsum/3
    return(totalprom)
}


num1=prompt("Ingrese un numero");
num2=prompt("Ingrese otro numero");
num3=prompt("Ingrese otro numero");
promedio=sp(parseInt(num1),parseInt(num2),parseInt(num3))
document.write("el promedio de los 3 numeros es "+promedio)
document.write("la suma de los tres numeros es "+ totalsum)