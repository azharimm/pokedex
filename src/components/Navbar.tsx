import React, { FormEvent, useCallback, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/Queries";
import { useStateValue } from "../context/StateProvider";
import logo from "../assets/logo.svg";

function Navbar() {
	const history = useHistory();
	const { dispatch } = useStateValue();
	const [fetchPokemon, fetch] = useLazyQuery(GET_POKEMON);
	useEffect(() => {
		if (fetch.data) {
			dispatch({
				type: "FETCH_POKEMON",
				payload: fetch.data.pokemon_v2_pokemon,
			});
			dispatch({
				type: "SET_QUERY",
				payload: "",
			});
			dispatch({
				type: "SET_IS_SEARCH",
				payload: false,
			});
		}
	}, [fetch, dispatch]);
	const handleOnClick = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			fetchPokemon();
			history.push("/");
		},
		[history, fetchPokemon]
	);
	return (
		<nav className="w-full md:w-2/3 px-0 py-3 mx-auto">
			<div className="flex justify-between items-center mx-5 md:mx-0">
				<h1 className="text-white text-xl">
					<a
						href="/"
						onClick={(e) => handleOnClick(e)}
						className="flex cursor-pointer"
					>
						<img
							src={logo}
							alt="logo"
							className="flex-1 w-7 mr-1"
						/>
						<span>Pokedex</span>
					</a>
				</h1>
				<div className="flex items-center text-white text-xs">
					<Link
						to="/owned"
						className="px-1 py-2 mr-2 w-40 sm:w-40 flex justify-center bg-green-600 hover:bg-green-500 rounded-md h-8 items-center"
					>
						<span className="sm:block">&nbsp;My Pokemon</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
