interface State {
	count: number;
	next: string;
	previous: null | string;
	pokemons: PokemonDetails[];
}

interface Pokemon {
	name: string;
	url: string;
}

interface PokemonDetails {
	picture: string;
	name: string;
	orderNumber: number;
	abilities: string[];
	types: string[];
	stats: string[];
	possibleEvolutions: string[];
	moves: string[];
}

interface Ability {
	ability: {
		name: string;
	};
}

interface Type {
	type: {
		name: string;
	};
}

interface Stat {
	stat: {
		name: string;
	};
}

interface Move {
	move: {
		name: string;
	};
}

interface EvolvesTo {
	species: {
		name: string;
	};
}


