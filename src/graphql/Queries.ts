import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
	query listPokemons {
		pokemon_v2_pokemon(limit: 100) {
			name
			id
			pokemon_v2_pokemontypes(limit: 1) {
				pokemon_v2_type {
					name
				}
			}
		}
	}
`;

export const GET_POKEMON_DETAIL = gql`
	query showPokemon($id: Int!) {
		pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
			name
			id
			height
			weight
			pokemon_v2_pokemonstats {
				base_stat
				pokemon_v2_stat {
					name
				}
			}
			pokemon_v2_pokemonmoves(limit: 10) {
				pokemon_v2_move {
					name
				}
			}
			pokemon_v2_pokemontypes {
				pokemon_v2_type {
					name
				}
			}
		}
	}
`;
