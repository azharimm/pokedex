import React from "react";
import { useQuery } from "@apollo/client";
//Query
import { GET_POKEMON } from "../graphql/Queries";
//Components
import Search from "../components/Search";
import PokeItem from "../components/PokeItem";

export type PokemonType = {
	id: number;
	name: string;
	pokemon_v2_pokemontypes: {
		pokemon_v2_type: {
			name: string;
		}
	}[]
}

const Home = () => {
	const { data, loading, error } = useQuery(GET_POKEMON);
	return (
		<div>
			<Search />
			<div className="container w-full md:w-2/3 mx-auto mt-5">
				{loading && <div className="text-center text-white">Loading...</div>}
				{error && <div className="text-center text-white">Oopss! Something went wrong, please refresh the page</div>}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{data?.pokemon_v2_pokemon.map((d: PokemonType) => <PokeItem pokemon={d} key={d.id} />)}
				</div>
			</div>
		</div>
	);
};

export default Home;
