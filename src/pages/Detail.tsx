import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../graphql/Queries";
import { bgColor } from "../utils/bgColor";
//Components
import Modal from "../components/Modal";
import PokeType from "../components/PokeType"
import PokeStat from "../components/PokeStat";
import PokeMove from "../components/PokeMove";

interface RouteParams {
	id: string;
}

const Detail = () => {
	const [modal, setModal] = useState(false);
	let { id } = useParams<RouteParams>();
	const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
		variables: { id: parseInt(id) },
	});
	if (error) {
		return <div className="text-center text-white">Oops! Something went wrong!</div>;
	}
	if (loading) {
		return <div className="text-center text-white">Loading...</div>
	}
	return (
		<>
			<div className="w-full max-w-6xl mt-2 rounded bg-white shadow-xl p-10 lg:px-20 mx-auto text-gray-800 relative md:text-left">
				<div className="md:flex items-center -mx-10">
					<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
						<div className="relative">
							<img
								src={`/pokemons/${id}.png`}
								className="w-full relative z-10"
								alt=""
							/>
							<div
								className={`border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0`}
							></div>
						</div>
					</div>
					<div
						className={`w-full md:w-1/2 px-10 py-5 rounded-md ${bgColor(
							data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name.toLowerCase()
						)}`}
					>
						<div className="mb-10">
							<div className="flex justify-between uppercase tracking-wide ">
								<span className="text-2xl text-white font-semibold">
									{data.pokemon_v2_pokemon[0].name}
								</span>
								<div className="">
									{data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes.map(
										(poke: any, index: number) => (
											<PokeType key={index} name={poke.pokemon_v2_type.name} />
										)
									)}
								</div>
							</div>
							<div className="mt-5">
								<p className="text-white">Profile:</p>
								<table className="text-left w-full border-collapse text-white">
									<tbody>
										<tr className="hover:bg-grey-lighter">
											<td className="py-2 px-6 border-b border-grey-light">
												Height
											</td>
											<td className="py-2 px-6 border-b border-grey-light">
												{data.pokemon_v2_pokemon[0]
													.height / 10}{" "}
												M
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-2 px-6 border-b border-grey-light">
												Weight
											</td>
											<td className="py-2 px-6 border-b border-grey-light">
												{data.pokemon_v2_pokemon[0]
													.weight / 10}{" "}
												Kg
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div>
							<div className="mt-2">
								<p className="text-white">Stats:</p>
								<table className="text-left w-full border-collapse text-white">
									<tbody>
										{data.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats.map(
											(poke: any, index: number) => (
												<PokeStat key={index} name={poke.pokemon_v2_stat.name} stat={poke.base_stat} />
											)
										)}
									</tbody>
								</table>
							</div>
							<div className="mt-5">
								<p className="text-white">Moves:</p>
								<div className="flex flex-wrap">
									{
										data.pokemon_v2_pokemon[0].pokemon_v2_pokemonmoves.map((poke: any, index: number) => (
											<PokeMove key={index} name={poke.pokemon_v2_move.name} />
										))
									}
								</div>
							</div>
							<div className="flex mt-5">
								<Link
									to="/"
									className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
								>
									Leave
								</Link>
								<button
									className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1"
									onClick={() => setModal((prev) => !prev)}
								>
									Catch!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				modal={modal}
				setModal={() => setModal((prev) => !prev)}
				success={true}
			/>
		</>
	);
};

export default Detail;
