// ITERABLES
let nombres = ["Angel", "Aury", "Sebastian", "Isaac"];

let iterable = nombres[Symbol.iterator]();

// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());

// ITERAR JSON
let fruta = {
  nombre: "Uva",
  color: "Morado",
  temporada: "Invierno",
};

// CONVERTIR JSON EN OBJETO ITERABLE
fruta[Symbol.iterator] = () => {
  let indice = 0;
  let valores = Object.values(this);

  return {
    next() {
      if (indice >= valores.length) {
        return {
          done: true,
          value: undefined,
        };
      }

      return {
        done: false,
        value: valores[indice++],
        indice: indice++,
      };
    },
  };
};

for (let propiedad of fruta) {
  console.log(propiedad);
}
