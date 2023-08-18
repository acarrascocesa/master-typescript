let nombres = ["Angel", "Aury", "Sebastian", "Isaac"];

/* BUCLE FOR CLASICO
for (let i = 0; i < nombres.length; i++) {
    console.log("FOR CLASICO");
    console.log(nombres[i]);
};
*/

// FOR IN - RECORRE EL INDICE DEL OBJETO O ARRAY
for (const indice in nombres) {
  // console.log(indice, nombres[indice]);
}

// FOR OF - RECORRE EL CONTENIDO DE LOS INDICES
for (const nombre of nombres) {
  // console.log(nombre);
}

// FOREACH - PUEDO OBTENER EL INDICE Y EL VALOR
nombres.forEach((nombre, indice) => {
  console.log(indice, nombre);
});
