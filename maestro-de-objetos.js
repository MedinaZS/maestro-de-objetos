const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


//Una serie de objetos Pokémon donde la identificación es divisible por 3
const pokemonIds3 = pokemon.filter( p => p.id % 3 === 0);
// console.log(pokemonIds3);

// una serie de objetos Pokémon que son del tipo "fuego"
const pokemonFire = pokemon.filter( p => p.types.includes("fire"));
// console.log(pokemonFire);

//Una variedad de objetos Pokémon que tienen más de un tipo
const pokemonVariety = pokemon.filter( p => p.types.length > 1);
// console.log(pokemonVariety);

//una matriz con solo los nombres de los Pokémon
const pokemonNames = pokemon.map(p => p.name);
// console.log(pokemonNames);

//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const pokemonNamesIds99 = pokemon.filter( p => p.id > 99).map(p => p.name);
// console.log(pokemonNamesIds99);

// una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const pokemonOnlyPoison = pokemon.filter( p => p.types.length === 1 && p.types.includes("poison")).map( p => p.name);
//console.log(pokemonOnlyPoison);

//una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const pokemonFly = pokemon.filter( p => p.types[1] === "flying").map( p => p.types[0]);
// console.log(pokemonFly);

// un recuento de la cantidad de pokémon que son de tipo "normal"
const pokemonNormalType = pokemon.filter( p => p.types.includes("normal")).length;
// console.log("Cantidad de pokemon tipo normal: " + pokemonNormalType);