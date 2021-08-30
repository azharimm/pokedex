import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON, LOAD_MORE, SEARCH_POKEMON } from "../graphql/Queries";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

export const useFetching = () => {
    const { dispatch } = useStateValue();
	const [fetchPokemon, fetch] = useLazyQuery(GET_POKEMON, {
		onCompleted: (data) => {
			dispatch({
				type: actionTypes.FETCH_POKEMON,
				payload: data.pokemon_v2_pokemon,
			});
		},
	});

	return {
		fetchPokemon,
		fetch,
	};
};

export const useLoadmore = () => {
    const { dispatch } = useStateValue();
	const [loadMore, more] = useLazyQuery(LOAD_MORE, {
		onCompleted: (data) => {
			dispatch({
				type: actionTypes.APPEND_POKEMON,
				payload: data.pokemon_v2_pokemon,
			});
		},
	});

	return {
		loadMore,
		more,
	};
};

export const useSearch = () => {
    const { dispatch } = useStateValue();
	const [searchPokemon, search] = useLazyQuery(SEARCH_POKEMON, {
		onCompleted: (data) => {
			dispatch({
				type: actionTypes.FETCH_POKEMON,
				payload: data.pokemon_v2_pokemon,
			});
		},
	});

	return {
		searchPokemon,
		search,
	};
};
