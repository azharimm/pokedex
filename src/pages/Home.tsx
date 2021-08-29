import React, { useState, useEffect } from "react";
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
		};
	}[];
};

const Home = () => {
	const { data, loading, error } = useQuery(GET_POKEMON);
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		if (loading === false && data) {
			setPokemons(data.pokemon_v2_pokemon);
		}
	}, [loading, data]);

	if(loading) {
		return (
			<div className="container w-full md:w-2/3 mx-auto mt-5">
				<div className="text-center text-white">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="text-center text-white">
				Oopss! Something went wrong, please refresh the page
			</div>
		);
	}

	return (
		<div>
			<Search />
			<div className="container w-full md:w-2/3 mx-auto mt-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{pokemons.map((d: PokemonType) => (
						<PokeItem pokemon={d} key={d.id} />
					))}
				</div>
				<div className="mx-auto text-center mt-5 pb-5">
					<button
						className="bg-blue-500 text-center hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1"
					>
						Loadmore
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
