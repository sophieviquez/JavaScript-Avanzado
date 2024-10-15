//1.- Hacer una petición a la PokeAPI para obtener cualquier Pokémon.
//Muestra sus tipos en consola mediante un for.
//(https://pokeapi.co/)

//Para ejecutar el codigo en consola debemos posicionarnos en la carpeta modulo-4-javascript-avanzado\proyectos y despues node async.js

async function getPokemon(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  console.log(`Tipos de ${pokemon.name}:`);
  pokemon.types.forEach((typeInfo) => {
    console.log(typeInfo.type.name);
  });
}

getPokemon("charmander"); // Puedes cambiar por otro nombre de Pokémon como pikachu, squirtle etc

//2.- Escribe una función que al ejecutarse realice una petición a la API de Open Library. Buscar un libro y traer el o los autores del primer libro
//Ejemplo: peticionLibro("i robot");
//[http://openlibrary.org/search.json?q=i+robot](http://openlibrary.org/search.json?q=i+robot)

/* async function peticionLibro(titulo) {
  try {
    // Realiza la solicitud a la API de Open Library
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}`
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convierte la respuesta a JSON
    const data = await response.json();

    // Comprueba si se encontraron libros
    if (data.docs.length > 0) {
      const primerLibro = data.docs[0];
      // Muestra los autores en consola
      console.log(
        `Autores de "${primerLibro.title}": ${
          primerLibro.author_name
            ? primerLibro.author_name.join(", ")
            : "No se encontraron autores"
        }`
      );
    } else {
      console.log("No se encontraron libros.");
    }
  } catch (error) {
    console.error("Error al hacer la petición:", error);
  }
}


peticionLibro("i robot"); */

//3.- Hacer una petición por autor y devolver la lista de sus libros.
//[http://openlibrary.org/search.json?author=asimov](http://openlibrary.org/search.json?author=asimov)

async function getBandGenre(bandName) {
  const response = await fetch(
    `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(
      bandName
    )}`
  );
  const data = await response.json();
  if (data.artists && data.artists.length > 0) {
    console.log(`Género de ${bandName}: ${data.artists[0].strGenre}`);
  } else {
    console.log("Banda no encontrada.");
  }
}

getBandGenre("coldplay");
//5.- Hacer una petición a la swapi para obtener un personaje y también obtener las películas donde aparece.
//[https://swapi.co/](https://swapi.co/)

async function getStarWarsCharacter(characterId) {
  const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
  const character = await response.json();
  console.log(`Personaje: ${character.name}`);
  console.log("Películas:");
  for (let filmUrl of character.films) {
    const filmResponse = await fetch(filmUrl);
    const film = await filmResponse.json();
    console.log(film.title);
  }
}

getStarWarsCharacter(1); // Luke Skywalker

//7.- Traer los primeros 151 pokemon de la primera generacion y devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño y peso.
//[https://pokeapi.co/](https://pokeapi.co/)

async function getFirstGenPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonDetails = await fetch(pokemon.url).then((res) => res.json());
      return {
        name: pokemonDetails.name,
        moves: pokemonDetails.moves.map((m) => m.move.name),
        types: pokemonDetails.types.map((t) => t.type.name),
        height: pokemonDetails.height,
        weight: pokemonDetails.weight,
      };
    })
  );

  console.log(pokemons);
}

getFirstGenPokemon();
