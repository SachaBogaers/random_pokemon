const button = document.querySelector("#button");
const main = document.querySelector('main')

const getPokemon = async () => {
	const id = Math.round(Math.random() * 898)
	const pokemonRaw = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		method: 'GET'
	})
	const pokemon = await pokemonRaw.json();
	main.innerHTML = "";
	const pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
	const h1 = document.createElement('h1');
	h1.innerHTML = pokeName;
	main.appendChild(h1);
	const img = document.createElement('img')
	img.src = pokemon.sprites.front_default;
	main.appendChild(img);
	const p = document.createElement('p');
	p.innerHTML = `Type: ${pokemon.types[0].type.name}`;
	main.appendChild(p);
}

button.addEventListener('click', getPokemon)