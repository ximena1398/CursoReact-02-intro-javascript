const nombre = 'Ximena';
const apellido = 'Medina';

const nombreCompleto = `${nombre} ${apellido}
${1 + 1}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un: ${getSaludo(nombre)}`);