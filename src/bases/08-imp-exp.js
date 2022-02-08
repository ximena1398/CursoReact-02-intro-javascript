import heroes, { owners } from "../data/heroes";

//console.log(heroes);
//console.log(owners);


//FIND
const getHeroeById = (id) => {
    return heroes.find(heroes => heroes.id == id);
}

//console.log(getHeroeById(2));
//console.log(getHeroeById(4));

//FILTER
export const getHeroeByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner == owner);
};

//console.log(getHeroeByOwner('DC'));

export default getHeroeById;
