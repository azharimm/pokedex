import { useLazyQuery } from "@apollo/client";
import { FETCH_POKEMON } from "../graphql/Queries";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

export const useFetch = () => {
    const { dispatch } = useStateValue();
	const [fetchPokemon, fetch] = useLazyQuery(FETCH_POKEMON, {
		onCompleted: (data) => {
			dispatch({
				type: actionTypes.APPEND_POKEMON,
				payload: data.pokemons.results,
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
	const [loadMore, more] = useLazyQuery(FETCH_POKEMON, {
		onCompleted: (data) => {
			dispatch({
				type: actionTypes.APPEND_POKEMON,
				payload: data.pokemons.results,
			});
		},
	});

	return {
		loadMore,
		more,
	};
};
