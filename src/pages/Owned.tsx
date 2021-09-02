import React, { useState, useEffect } from "react";
import PokeItem from "../components/PokeItem";
import { PokemonType } from "./Home";

const Owned = () => {
	const [pokemons, setPokemons] = useState([]);
	useEffect(() => {
		const pokemon = localStorage.getItem("ownedPokemon");
		if (pokemon) {
			setPokemons(JSON.parse(pokemon));
		}
	}, []);

	const releasePokemon = (pokeName: string | undefined) => {
		const pokemon = localStorage.getItem("ownedPokemon");
		if (pokemon) {
			const newList = JSON.parse(pokemon).filter(
				(p: PokemonType) => p.pokeName !== pokeName
			);
			localStorage.setItem("ownedPokemon", JSON.stringify(newList));
			setPokemons(newList);
		}
	};
	return (
		<div>
			<div className="container w-full md:w-2/3 mx-auto mt-5 pt-12 pb-5">
				<p className="text-white text-bold text-center text-2xl mb-4">
					My Pokemon
				</p>
				{pokemons.length === 0 ? (
					<div className="mt-52 mx-5 text-center text-white">
						You don't have any pokemons. Try catch one ?
					</div>
				) : (
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{pokemons.map((d: PokemonType) => (
							<PokeItem
								pokemon={d}
								releasePokemon={(pokeName) =>
									releasePokemon(pokeName)
								}
								key={d.pokeName}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Owned;
