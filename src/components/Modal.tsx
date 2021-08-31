import React, { useState, FormEvent, useEffect } from "react";
import { PokemonType } from "../pages/Home";
import "./Modal.css";

export type Props = {
	modal: boolean;
	setModal: () => void;
	success?: boolean;
	id: number;
	name: string;
	image?: string;
};

const Modal: React.FC<Props> = ({
	modal,
	setModal,
	success,
	id,
	name,
	image,
}) => {
	const [pokeName, setPokeName] = useState("");
	const [isSave, setIsSave] = useState(false);
	const [notUnique, setNotUnique] = useState(false);
	useEffect(() => {
		if (modal) {
			setIsSave(false);
			setNotUnique(false);
			setPokeName("");
		}
	}, [modal]);
	const savePokemon = (e: FormEvent) => {
		e.preventDefault();
		const ownedPokemon = localStorage.getItem("ownedPokemon");
		if (!ownedPokemon) {
			localStorage.setItem(
				"ownedPokemon",
				JSON.stringify([
					{
						id,
						name,
						pokeName,
						image,
					},
				])
			);
		} else {
			const ownedPokemonParsed = JSON.parse(ownedPokemon);
			const checkIfNameExists = ownedPokemonParsed.find(
				(p: PokemonType) => p.pokeName === pokeName
			);
			if (checkIfNameExists) {
				setNotUnique(true);
				return;
			}
			localStorage.setItem(
				"ownedPokemon",
				JSON.stringify([
					{
						id,
						name,
						pokeName,
						image,
					},
					...ownedPokemonParsed,
				])
			);
		}
		setPokeName("");
		setNotUnique(false);
		setIsSave(true);
	};
	return (
		<div
			className={`main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${
				modal ? "" : "hidden"
			}`}
			style={{ background: "rgba(0,0,0,.7)" }}
		>
			<div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div className="modal-content py-4 text-left px-6">
					<div className="flex justify-between items-center pb-3">
						<p className="text-2xl font-bold">
							{success ? "Success" : "Failed"}
						</p>
						<div
							className="modal-close cursor-pointer z-50"
							onClick={setModal}
						>
							<svg
								className="fill-current text-black"
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
							>
								<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
							</svg>
						</div>
					</div>
					{success ? (
						<form onSubmit={(e) => savePokemon(e)}>
							{isSave ? (
								<p>Your pokemon successfully catch and save</p>
							) : (
								<>
									<div className="my-5">
										<label className="block w-full space-y-1 text-gray-700 text-md font-semibold px-4 py-3 rounded-xl border transition hover:bg-gray-50 hover:bg-opacity-50 hover:border-purple-800">
											<span>Give the pokemon a name</span>
											<input
												type="text"
												value={pokeName}
												className="w-full p-3 font-thin transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300"
												autoComplete="off"
												onChange={(e) =>
													setPokeName(e.target.value)
												}
												required={true}
											/>
											{notUnique && (
												<label className="text-sm font-semibold text-red-500 text-center">
													Please provide a unique name
												</label>
											)}
										</label>
									</div>
									<div className="flex justify-end pt-2">
										<button
											className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
											type="button"
											onClick={setModal}
										>
											Cancel
										</button>
										<button
											className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1"
											type="submit"
										>
											Save
										</button>
									</div>
								</>
							)}
						</form>
					) : (
						<div>
							<p>
								Failed to catch the pokemon! You can try again
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
