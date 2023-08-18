// STRING
let nombre = "Angel";

// NUMBER
let numero = 34;
let decimal = 3.15;

// BOOLEAN
let mayor_edad = true;
let menor_edad = Boolean(0); // 1 es true y 0 es false

// ARRAYS
let paises = ["RD", "CUBA", "ARGENTINA", "USA"];
// console.log(paises[0]);

// NULL
let vacio = null;

// UNDEFINED
let no_definido = undefined;

// JSON - JAVASCRIPT OBJECT NOTATION - OBJETOS LITERALES
let pelicula = {
  titulo: "Space Jam",
  genero: "Animacion",
  anio: 1996,
  director: "Tarantino",
  mostrar: function () {
    return `
        **** LA PELICULA DE LA SEMANA **** \n
            TITULO: ${this.titulo} \n
            GENERO: ${this.genero} \n
            ANIO: ${this.anio} \n
            DIRECTOR: ${this.director}
        `;
  },
};

// AGREGAR PROPIEDADES A UN JSON
pelicula.pais = "USA";

// ELIMINAR PROPIEDAD DE UN JSON
delete pelicula.pais;

// COMPROBAR SI EXISTE DENTRO DEL OBJETO
// console.log("titulo" in pelicula);

// RECORRER OBJETOS
for (const propiedad in pelicula) {
  // MUESTRA LOS KEYS
  // console.log(propiedad);
  // MUESTRA LOS VALUES
  // console.log(pelicula[propiedad]);
}

// SYMBOLS - NUEVO TIPO DE DATO PRIMITIVO - VALORES UNICOS
let animal = Symbol("tigre");

let user = {
  id: 1,
  nombre: "Angel",
  apellido: "Carrasco",
};
// console.log(user);

// Saber tipo de datos con typeof()
// console.log(typeof(numero));
