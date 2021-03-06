import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SHOW_POKEMON } from "../graphql/Queries";
import { bgColor, catching } from "../utils/utils";
//Components
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import PokeType from "../components/PokeType";
import PokeStat from "../components/PokeStat";
import PokeMove from "../components/PokeMove";

interface RouteParams {
	name: string;
}

const Detail = () => {
	const [modal, setModal] = useState(false);
	const [isCatching, setIsCatching] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [pokeImage, setPokeImage] = useState("");
	const history = useHistory();
	let { name } = useParams<RouteParams>();
	const { data, loading, error } = useQuery(SHOW_POKEMON, {
		variables: { name },
	});
	const catchPokemon = async () => {
		setIsCatching(true);
		const result: any = await catching();
		setIsCatching(false);
		setIsSuccess(result);
		setModal(true);
	};

	if (error) {
		return (
			<div className="text-center text-white">
				Oops! Something went wrong!
			</div>
		);
	}
	if (loading) {
		return <Loading />;
	}
	if (data) {
		if(pokeImage === '') {
			setPokeImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.pokemon.id}.svg`)
		}
	}
	return (
		<>
			<div className="w-full max-w-6xl mt-2 rounded bg-white shadow-xl p-10 lg:px-20 mx-auto text-gray-800 relative md:text-left">
				<div className="md:flex items-center -mx-10">
					<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
						<div className="relative">
							<img
								src={pokeImage}
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
							data.pokemon.types[0].type.name.toLowerCase()
						)}`}
					>
						<div className="mb-10">
							<div className="flex justify-between uppercase tracking-wide ">
								<span className="text-2xl text-white font-semibold">
									{data.pokemon.name}
								</span>
								<div className="">
									{data.pokemon.types.map(
										(poke: any, index: number) => (
											<PokeType
												key={index}
												name={poke.type.name}
											/>
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
												{data.pokemon.height / 10} M
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-2 px-6 border-b border-grey-light">
												Weight
											</td>
											<td className="py-2 px-6 border-b border-grey-light">
												{data.pokemon.weight / 10} Kg
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
										{data.pokemon.stats.map(
											(poke: any, index: number) => (
												<PokeStat
													key={index}
													name={poke.stat.name}
													stat={poke.base_stat}
												/>
											)
										)}
									</tbody>
								</table>
							</div>
							<div className="mt-5">
								<p className="text-white">Moves:</p>
								<div className="flex flex-wrap">
									{data.pokemon.moves
										.slice(0, 14)
										.map((poke: any, index: number) => (
											<PokeMove
												key={index}
												name={poke.move.name}
											/>
										))}
								</div>
							</div>
							<div className="flex mt-5">
								<button
									className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
									onClick={() => history.goBack()}
								>
									Leave
								</button>
								<button
									className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1 disabled:opacity-50 disabled:cursor-not-allowed"
									onClick={() => catchPokemon()}
									disabled={isCatching}
								>
									{isCatching
										? "Catching Pokemon..."
										: "Catch!"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				modal={modal}
				setModal={() => setModal((prev) => !prev)}
				id={data.pokemon.id}
				name={data.pokemon.name}
				image={pokeImage}
				success={isSuccess}
			/>
		</>
	);
};

export default Detail;
