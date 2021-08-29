import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
//Query
import { GET_POKEMON, LOAD_MORE, SEARCH_POKEMON } from "../graphql/Queries";
//Components
import Search from "../components/Search";
import PokeItem from "../components/PokeItem";
//Hooks
import { useStateValue } from "../context/StateProvider";

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
	const { state, dispatch } = useStateValue();
	const [fetchPokemon, fetch] = useLazyQuery(GET_POKEMON);
	const [loadMore, { data, loading, error }] = useLazyQuery(LOAD_MORE);
	const [searchPokemon, search] = useLazyQuery(SEARCH_POKEMON);

	useEffect(() => {
		if(state.pokemons.length === 0) {
			fetchPokemon();
		}
	}, []);
	
	useEffect(() => {
		if (fetch.loading === false && fetch.data) {
			dispatch({
				type: 'FETCH_POKEMON',
				payload: fetch.data.pokemon_v2_pokemon
			})
		}
	}, [fetch.loading, fetch.data]);

	useEffect(() => {
		if (loading === false && data) {
			dispatch({
				type: 'APPEND_POKEMON',
				payload: data.pokemon_v2_pokemon
			})
		}
	}, [loading, data]);

	useEffect(() => {
		if (search.loading === false && search.data) {
			dispatch({
				type: 'FETCH_POKEMON',
				payload: search.data.pokemon_v2_pokemon
			})
		}
	}, [search.loading, search.data]);

	const handleLoadmore = () => {
		loadMore({
			variables: { offset: state.offset },
		});
		dispatch({
			type: 'SET_OFFSET',
			payload: state.offset + 20
		})
	};

	const handleSearch = (e: React.FormEvent, q: string) => {
		e.preventDefault();
		searchPokemon({
			variables: { name: `%${q}%` },
		});
		dispatch({
			type: 'SET_IS_SEARCH',
			payload: true
		})
	};

	if (fetch.error) {
		return (
			<div className="text-center text-white">
				Oopss! Something went wrong, please refresh the page
			</div>
		);
	}


	return (
		<div>
			<Search
				query={state.query}
				setQuery={(q) => {
					dispatch({
						type: 'SET_QUERY',
						payload: q
					})
				}}
				handleSearch={(e, query) => handleSearch(e, query)}
			/>
			{fetch.loading || search.loading  ? (
				<div className="container w-full md:w-2/3 mx-auto mt-5">
					<div className="text-center text-white">Loading...</div>
				</div>
			) : (
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
										disabled={loading}
									>
										{loading ? "Loadmore ..." : "Loadmore"}
									</button>
									{error && (
										<p className="text-red-400">
											Oops! something went wrong!
										</p>
									)}
								</div>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Home;
