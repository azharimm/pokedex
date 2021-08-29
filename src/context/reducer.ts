export const initialState = {
    pokemons: [],
    query: '',
    isSearch: false,
    offset: 20,
    loading: false,
    error: false
}

export type ActionType = {
	type: string;
	payload: any;
};

export const actionTypes = {
    FETCH_POKEMON: 'FETCH_POKEMON',
    SET_QUERY: 'SET_QUERY',
    SET_IS_SEARCH: 'SET_IS_SEARCH',
    SET_IS_LOADING: 'SET_IS_LOADING',
    APPEND_POKEMON: 'APPEND_POKEMON',
    SET_OFFSET: 'SET_OFFSET',
}

const reducer = (state = initialState, action: ActionType) => {

    switch(action.type) {
        case actionTypes.FETCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
        case actionTypes.APPEND_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload]
            }
        case actionTypes.SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case actionTypes.SET_IS_SEARCH:
            return {
                ...state,
                isSearch: action.payload
            }
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case actionTypes.SET_OFFSET:
            return {
                ...state,
                offset: action.payload
            }
        default:
            return state
    }
}

export default reducer;