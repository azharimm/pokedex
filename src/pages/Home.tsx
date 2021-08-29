import React, { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
//Query
import { GET_POKEMON, LOAD_MORE, SEARCH_POKEMON } from "../graphql/Queries";
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
	const fetch = useQuery(GET_POKEMON);
	const [loadMore, {data, loading, error}] = useLazyQuery(LOAD_MORE);
	const [searchPokemon, search] = useLazyQuery(SEARCH_POKEMON);
	const [pokemons, setPokemons] = useState([] as any);
	const [query, setQuery] = useState("");
	const [isSearch, setIsSearch] = useState(false);
	const [offset, setOffset] = useState(20);

	useEffect(() => {
		if (fetch.loading === false && fetch.data) {
			setPokemons(fetch.data.pokemon_v2_pokemon);
		}
	}, [fetch.loading, fetch.data]);

	useEffect(() => {
		if (loading === false && data) {
			setPokemons((prev: any) => [...prev, ...data.pokemon_v2_pokemon]);
		}
	}, [loading, data]);

	useEffect(() => {
		if (search.loading === false && search.data) {
			setPokemons(search.data.pokemon_v2_pokemon);
		}
	}, [search.loading, search.data]);

	const handleLoadmore = () => {
		loadMore({
			variables: { offset: offset }
		});
		setOffset(prev => prev + 20);
	}

	const handleSearch = (e: React.FormEvent, q: string) => {
		e.preventDefault();
		searchPokemon({
			variables: { name: `%${q}%` }
		});
		setIsSearch(true);
	}
		

	if(fetch.loading) {
		return (
			<div className="container w-full md:w-2/3 mx-auto mt-5">
				<div className="text-center text-white">Loading...</div>
			</div>
		)
	}

	if (fetch.error) {
		return (
			<div className="text-center text-white">
				Oopss! Something went wrong, please refresh the page
			</div>
		);
	}

	return (
		<div>
			<Search query={query} setQuery={setQuery} handleSearch={(e, query) => handleSearch(e, query)} />
			<div className="container w-full md:w-2/3 mx-auto mt-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{pokemons.map((d: PokemonType) => (
						<PokeItem pokemon={d} key={d.id} />
					))}
				</div>
				{ (offset <= 1000 && !isSearch) && (
					<div className="mx-auto text-center mt-5 pb-5">
						<button
							className="bg-blue-500 text-center hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1 disabled:opacity-50"
							onClick={() => handleLoadmore()}
							disabled={loading}
						>
							{loading ? 'Loadmore ...' : 'Loadmore'}
						</button>
						{ error && <p className="text-red-400">Oops! something went wrong!</p>}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
