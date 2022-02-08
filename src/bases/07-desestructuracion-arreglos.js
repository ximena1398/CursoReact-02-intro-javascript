//Desestructuración arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes[0]);

const [p1, , p3] = personajes;
console.log(p1, p3);

const returnArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnArreglo();
console.log(letras, numeros);

//Tarea
const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const arr2 = useState('Goku');
console.log(arr2);
arr2[1]();

const [nombre, setNombre] = useState('Goku');
console.log(nombre, setNombre);