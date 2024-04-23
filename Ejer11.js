//- Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

    var palabra=['s','i','l','l','a']
    var letracontador = {};

        for (var i = 0; i < palabra.length; i++) {
          var letra = palabra[i];
      

          if (letracontador[letra]) {

            letracontador[letra]++;
          } else {

            letracontador[letra] = 1;
          }
        }
        console.log("Letras distintas y sus repeticiones:");
        for (var letra in letracontador) {
          console.log(letra + " = " + letracontador[letra]);
        }
      

      


 
