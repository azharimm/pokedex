import React, { createContext, useContext, useReducer, Dispatch } from "react";
import { PokemonType } from "../pages/Home";
import reducer, { initialState, ActionType } from "./reducer";

interface State {
	pokemons: PokemonType[];
	query: string;
	isSearch: boolean;
	offset: number;
	loading: boolean;
	error: boolean;
}

export type ContextState = {
	state: State;
	dispatch: Dispatch<ActionType>;
};

export const StateContext = createContext<ContextState>({
	state: initialState,
	dispatch: () => null,
});

export type Props = {
	children: any;
};

export const StateProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateValue = () => useContext(StateContext);
