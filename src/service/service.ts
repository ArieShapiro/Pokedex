import axios from 'axios';

export const getData = async (url: string): Promise<State> => {
	const { data } = await axios.get(url);

	let pokemons: PokemonDetails[] = await Promise.all(
		data.results.map(async (r: Pokemon) => {
			const orderNumber: number = getOrderNumber(r.url);
			const details: PokemonDetails = await getDetails(r.name, r.url, orderNumber);
			return details;
		})
	);


	return {
		count: 1050,
		next: data.next,
		previous: data.previous,
		pokemons,
	};
};

const getDetails = async (name: string, url: string, orderNumber: number): Promise<PokemonDetails> => {
	const pokemonData = await axios.get(url);
	const { abilities, moves, sprites, stats, types } = pokemonData.data;

	const speciesData = await axios.get(pokemonData.data.species.url);
	const evolutionChainData = await axios.get(speciesData.data.evolution_chain.url);

	const possibleEvolutions = evolutionChainData.data.chain.evolves_to.map((e: EvolvesTo) => e.species.name);

	let details: PokemonDetails = {
		name,
		picture: sprites.front_default,
		abilities: abilities.map((a: Ability) => a.ability.name),
		types: types.map((t: Type) => t.type.name),
		orderNumber,
		stats: stats.map((s: Stat) => s.stat.name),
		possibleEvolutions: possibleEvolutions,
		moves: moves.map((m: Move) => m.move.name),
	};

	return details;
};

const getOrderNumber = (url: string) => parseInt(url.split('/')[url.split('/').length - 2]);
