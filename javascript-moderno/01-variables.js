// ECMASCRIPT 2021 / ES12 /ES.NEXT

// Variables: var, let, const.
// COntenedor de informacion, caja para guardar datos.

// Var: global o funcional
var nombre = "Angel";

function mostrarNombre() {
  nombre = "Sebastian";
  var apellido = "Carrasco";
  // console.log("Dentro" + nombre);
  // console.log(apellido);
}

mostrarNombre();
// console.log("Fuera" + nombre);

// LET: ambito de bloque
let pais = "RD";

console.log(pais);

function mostrarPais() {
  console.log(pais);
}

mostrarPais();

if (pais === "RD") {
  let continente = "America";
  console.log(continente);
}
