function sp (num1,num2,num3){
    total=num1+num2+num3
    total=total/3
    return(total)
}


num1=prompt("Ingrese un numero");
num2=prompt("Ingrese otro numero");
num3=prompt("Ingrese otro numero");
promedio=sp(parseInt(num1),parseInt(num2),parseInt(num3))
document.write("el promedio de los 3 numeros es "+promedio)
