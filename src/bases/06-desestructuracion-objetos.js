//Desestructuración o asignación destructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
console.log(persona.clave);

//
const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        name: nombre,
        range: rango,
        latlng: {
            lat: 65.8188,
            lng: 67.8898
        }
    }
}

//retornaPersona(persona);
const {nombreClave, anios, name, range, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios, name, range, lat, lng);
