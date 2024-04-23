//- Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.

const minimo = 1;
const maximo = 40;
const divisor = 2;
const resultado = obtenerDivisores(minimo, maximo, divisor);
console.log("Divisores de", divisor, "en el rango de", minimo, "a", maximo, ":", resultado);

function obtenerDivisores(minimo, maximo, divisor) {
    let divisores = [];
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        divisores[divisores.length]=i;
      }
    }
   return divisores; 
  }
  


