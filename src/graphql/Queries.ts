import { gql } from "@apollo/client";

export const FETCH_POKEMON = gql`
	query listPokemons($offset: Int!) {
		pokemons(limit: 20, offset: $offset) {
			count
			next
			previous
			nextOffset
			prevOffset
			params
			results {
				id
				url
				name
				image
				artwork
				dreamworld
			}
			status
			message
		}
	}
`;

export const SHOW_POKEMON = gql`
	query showPokemon($name: String!) {
		pokemon(name: $name) {
			id
			height
			weight
			name
			sprites {
				front_default
			}
			types {
				type {
					name
				}
			}
			stats {
				base_stat
				stat {
					name
				}
			}
			moves {
				move {
					name
				}
			}
		}
	}
`;
