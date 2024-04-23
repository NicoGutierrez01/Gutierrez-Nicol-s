//- Sumar solo los elementos pares de un array.

var a = [1,2,3,4,5,6,7,8,9,10]
var total=0

for(i=0; i<10; i++){
    if(a[i] % 2===0){
    total=total+a[i]
}
}
console.log("La suma de los elementos pares es " + total)
