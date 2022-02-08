//Funciones
const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

//Función flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

//cuando solo tiene un retorno es posible:
const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar2('Ximena Medina'));
console.log(saludar3('Xime Medina'));

//
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Ximenita03'
    }
}

console.log(getUser());

//cuando es un objeto es posible retornarlo de la siguiente manera:
const getUser2 = () =>
({
    uid: 'ABC123',
    username: 'Ximenita03'
})

console.log(getUser2());

//TAREA
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123',
        username: nombre
    }
};

const UsuarioActivo = getUsuarioActivo('Ximena MC');
console.log(UsuarioActivo);

//1. Transformar en una función flecha
const getUsuarioActivoFlecha = (nombre) =>
    ({
        uid: 'ABC123',
        username: nombre
    })

//2. Tiene que retornar un objeto implícito
//3. Pruebas
const UsuarioActivoFlecha = getUsuarioActivoFlecha('Ximena MCF');
console.log(UsuarioActivoFlecha); 