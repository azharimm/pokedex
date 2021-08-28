import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
	return (
		<>
			<div className="w-full max-w-6xl mt-3 rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
				<div className="md:flex items-center -mx-10">
					<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
						<div className="relative">
							<img
								src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
								className="w-full relative z-10"
								alt=""
							/>
							<div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-10 py-5 bg-green-600 rounded-md">
						<div className="mb-10">
							<div className="flex justify-between uppercase tracking-wide ">
								<span className="text-2xl text-white font-semibold">
									Bulbasaur
								</span>
								<div className="">
									<span className="text-sm font-medium bg-green-600 border-2 border-red-500 py-1 px-2 rounded text-white align-middle mr-1">
										Grass
									</span>
									<span className="text-sm font-medium bg-purple-600 border-2 border-red-500 py-1 px-2 rounded text-white align-middle">
										Poison
									</span>
								</div>
							</div>
							<div className="mt-2">
								<p className="text-white">Profile:</p>
								<table className="text-left w-full border-collapse text-white">
									<tbody>
										<tr className="hover:bg-grey-lighter">
											<td className="py-2 px-6 border-b border-grey-light">
												Height
											</td>
											<td className="py-2 px-6 border-b border-grey-light">
												0.7M
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-2 px-6 border-b border-grey-light">
												Weight
											</td>
											<td className="py-2 px-6 border-b border-grey-light">
												6.2Kg
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
										<tr className="hover:bg-grey-lighter">
											<td className="py-3 px-6 border-b border-grey-light">
												HP
											</td>
											<td className="py-3 px-6 border-b border-grey-light">
												60
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-3 px-6 border-b border-grey-light">
												Attack
											</td>
											<td className="py-3 px-6 border-b border-grey-light">
												60
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-3 px-6 border-b border-grey-light">
												Defense
											</td>
											<td className="py-3 px-6 border-b border-grey-light">
												60
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-3 px-6 border-b border-grey-light">
												Special-Attack
											</td>
											<td className="py-3 px-6 border-b border-grey-light">
												60
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-3 px-6 border-b border-grey-light">
												Special-Defense
											</td>
											<td className="py-3 px-6 border-b border-grey-light">
												60
											</td>
										</tr>
										<tr className="hover:bg-grey-lighter">
											<td className="py-3 px-6 border-b border-grey-light">
												Speed
											</td>
											<td className="py-3 px-6 border-b border-grey-light">
												60
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="mt-5">
								<p className="text-white">Moves:</p>
								<div className="flex flex-wrap">
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#winter
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#gameofthrones
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
									<span className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm cursor-pointer">
										#stark
									</span>
								</div>
							</div>
							<div className="flex mt-5">
								<Link
									to="/"
									className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
								>
									Leave
								</Link>
								<button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1">
									Catch!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Detail;
