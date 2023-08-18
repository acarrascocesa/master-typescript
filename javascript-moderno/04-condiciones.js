// OPERADOR TERNARIO
let persona = ["Angel", 18];

// Condicion hecha con if
// if (persona[1] >= 18) {
// console.log("Es mayor de edad");
// } else {
// console.log("Es menor de edad");
// }

// OPERADOR TERNARIO
let edad = persona[1] >= 18 ? "Es mayor de edad" : "Es menor de edad";
// console.log(edad);

let exist = persona ? "Persona existe" : "Persona no existe";
// console.log(exist);


// DIFERENCIA ENTRE == Y ===, != Y !==
let edad1 = 32;
let edad2 = "32";

// COMPARA SOLO EL DATO
if (edad1 == edad2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

// COMPARA EL DATO Y EL TIPO DEL DATO
if (edad1 === edad2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}