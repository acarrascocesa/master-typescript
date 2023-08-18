let nombre = "Angel";
let apellido = "Carrasco";
let profesion = "Programador";

// Forma antigua:
let nya = nombre + " " + apellido + "\n" + profesion;

// Template String
let tnya = `
${nombre} ${apellido} 
${profesion}
`;

console.log(nya);
console.log(tnya);

let fichaTecnica = `
    <div class="ficha">
        <h2>${nombre} ${apellido}</h2>
        <h3>${profesion}</h3>
        <p>Forma parte del equipo victorrobles.es</p>
    </div>
`;

let cajaFicha = document.createElement("section");
cajaFicha.innerHTML = fichaTecnica;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.body.appendChild(cajaFicha);
  },
  false
);
