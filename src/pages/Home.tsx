import React, { useEffect } from "react";

import Search from "../components/Search";
import PokeItem from "../components/PokeItem";
import Loading from "../components/Loading";

import { useStateValue } from "../context/StateProvider";
import { useFetching, useLoadmore, useSearch } from "../hooks/useCustomQuery";

export type PokemonType = {
	id: number;
	name: string;
	pokeName?: string;
	pokemon_v2_pokemontypes: {
		pokemon_v2_type: {
			name: string;
		};
	}[];
	pokemon_v2_pokemonsprites: {
		sprites: string;
	}[];
};



const Home = () => {
	const { state, dispatch } = useStateValue();
	const { fetchPokemon, fetch } = useFetching();
	const { loadMore, more } = useLoadmore();
	const { searchPokemon, search } = useSearch();

	useEffect(() => {
		if (state.pokemons.length === 0) {
			fetchPokemon();
		}
	}, [state.pokemons.length, fetchPokemon]);

	const handleLoadmore = () => {
		loadMore({
			variables: { offset: state.offset },
		});
		dispatch({
			type: "SET_OFFSET",
			payload: state.offset + 20,
		});
	};

	const handleSearch = (e: React.FormEvent, q: string) => {
		e.preventDefault();
		searchPokemon({
			variables: { name: `%${q}%` },
		});
		dispatch({
			type: "SET_IS_SEARCH",
			payload: true,
		});
	};

	if (fetch.error) {
		return (
			<div className="text-center text-white">
				Oopss! Something went wrong, please refresh the page
			</div>
		);
	}

	if (fetch.loading || search.loading) {
		return <Loading />;
	}

	return (
		<div>
			<Search
				query={state.query}
				setQuery={(q) => {
					dispatch({
						type: "SET_QUERY",
						payload: q,
					});
				}}
				handleSearch={(e, query) => handleSearch(e, query)}
			/>

			<div className="container w-full md:w-2/3 mx-auto mt-5">
				{state.pokemons.length === 0 ? (
					<div className="text-center text-white">
						No pokemon found
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{state.pokemons.map((d: PokemonType) => (
								<PokeItem pokemon={d} key={d.id} />
							))}
						</div>
						{state.offset <= 1000 && !state.isSearch && (
							<div className="mx-auto text-center mt-5 pb-5">
								<button
									className="bg-blue-500 text-center hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1 disabled:opacity-50"
									onClick={() => handleLoadmore()}
									disabled={more.loading}
								>
									{more.loading ? "Loadmore ..." : "Loadmore"}
								</button>
								{more.error && (
									<p className="text-red-400">
										Oops! something went wrong!
									</p>
								)}
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
