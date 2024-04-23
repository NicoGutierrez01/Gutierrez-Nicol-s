//- Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. 
//Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.

let listaPersonas = [
    { nombre: "María", sexo: "femenino", edad: 30 },
    { nombre: "Pedro", sexo: "masculino", edad: 20 },
    { nombre: "Patricia", sexo: "femenino", edad: 22 },
    { nombre: "Alberto", sexo: "masculino", edad: 40 },
    { nombre: "Jose", sexo: "masculino", edad: 55 },
  ];

let sumaEdades = 0;
    for (let i = 0; i < listaPersonas.length; i++) {
        sumaEdades += listaPersonas[i].edad;
    }

let promedioEdad = sumaEdades / listaPersonas.length;

let mujeres = listaPersonas.filter(persona => persona.sexo === "femenino");
mujeres.sort((a, b) => b.edad - a.edad);

let nombreMujerMayorEdad = mujeres[0].nombre;

let hombres = listaPersonas.filter(persona => persona.sexo === "masculino");
hombres.sort((a, b) => a.edad - b.edad);

let nombreHombreMenorEdad = hombres[0].nombre;

let edadesMujeres = mujeres.map(mujer => mujer.edad);
let sumaEdadesMujeres = edadesMujeres.reduce((a, b) => a + b, 0);

let promedioEdadMujeres = sumaEdadesMujeres / edadesMujeres.length;

console.log("Promedio de edad total:", promedioEdad)
console.log("Nombre de la mujer con mayor edad:", nombreMujerMayorEdad)
console.log("Nombre del hombre con menor edad:", nombreHombreMenorEdad)
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres)
