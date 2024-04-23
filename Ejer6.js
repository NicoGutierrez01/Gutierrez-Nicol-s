//- Ingresar dos valores enteros y enumerar los elementos que los separan.
//- Ejemplo 1: 2 y 6 --> 3 , 4, 5
//- Ejemplo 2: 10 y 5 --> 9, 8, 7, 6 

var a = 5
var b = 105

if (a>b){
    while (a-1>b){
        b=b+1
        console.log(b)
    }
}
else{
    while (b-1>a){
        a=a+1
        console.log(a)
    }
}


