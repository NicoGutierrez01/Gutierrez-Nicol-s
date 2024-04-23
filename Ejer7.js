//- Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
var num1 = 1
var num2 = 10


for (i=num1; i<num2; i++){
    if (i % 3===0){
        console.log("Los multiplos de 3 son " + i)
    }  
}