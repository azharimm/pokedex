import React from "react";
import { bgColor } from "../utils/utils";
import { Link } from "react-router-dom";
import { PokemonType } from "../pages/Home";
import logo from "../assets/logo.svg";

export type Props = {
	pokemon: PokemonType;
	releasePokemon?: (pokeName: string | undefined) => void;
};

const PokeItem: React.FC<Props> = ({ pokemon, releasePokemon }) => {
	let ownedCount = 0;
	let pokeImage = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites)
		.other["official-artwork"].front_default;
	if (pokeImage) {
		pokeImage = pokeImage.replace(
			"/media",
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/"
		);
	} else {
		pokeImage = logo;
	}
	const ownedPokemon = localStorage.getItem("ownedPokemon");
	if (ownedPokemon) {
		const ownedPokemonParsed = JSON.parse(ownedPokemon);
		ownedCount = ownedPokemonParsed.filter(
			(p: PokemonType) => p.id === pokemon.id
		).length;
	}
	return (
		<Link to={pokemon.pokeName ? `#` : `detail/${pokemon.id}`}>
			<div className="transform transition duration-500 hover:scale-110 motion-reduce:transform-none cursor-pointer flex justify-center items-center">
				<div className="h-56 w-72 absolute flex justify-center items-center">
					<img
						className="object-cover h-20 w-20 "
						src={pokeImage}
						alt=""
					/>
				</div>

				<div
					className={`h-56 mx-4 w-5/6 rounded-3xl shadow-md sm:w-80 sm:mx-0 ${bgColor(
						pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name.toLocaleLowerCase()
					)}`}
				>
					<div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
						<h1 className="text-white">#{pokemon.id}</h1>
					</div>

					<div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center ">
						<div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-gray-500 text-xs">Type</h1>
								<h1 className="text-gray-600 text-sm">
									{
										pokemon.pokemon_v2_pokemontypes[0]
											.pokemon_v2_type.name
									}
								</h1>
							</div>
							<div className="flex flex-col justify-center items-center">
								{!releasePokemon ? (
									<>
										<h1 className="text-gray-500 text-xs">
											Owned
										</h1>
										<h1 className="text-gray-600 text-sm">
											{ownedCount}
										</h1>
									</>
								) : (
									<>
										<h1 className="text-gray-500 text-xs">
											Release?
										</h1>
										<button
											className="text-red-600 cursor-pointer"
											onClick={() =>
												releasePokemon(pokemon.pokeName)
											}
											style={{ zIndex: 1000 }}
										>
											x
										</button>
									</>
								)}
							</div>
						</div>
						<div className="w-full h-1/2 flex flex-col justify-center items-center">
							{pokemon.pokeName ? (
								<h1 className="text-center text-gray-700 font-bold">
									{pokemon.pokeName} <br />
									<span className="text-gray-500 text-sm">
										({pokemon.name})
									</span>
								</h1>
							) : (
								<h1 className="text-gray-700 font-bold">
									{pokemon.name}
								</h1>
							)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PokeItem;
