import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
	return (
		<div className="w-5/6 md:w-2/3 mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
			<div className="block md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="h-48 w-full object-cover md:h-full md:w-48"
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
						alt="Man looking at item at a store"
					/>
				</div>
				<div className="p-8">
					<div className="flex justify-between uppercase tracking-wide ">
						<span className="text-lg text-indigo-500 font-semibold">Bulbasaur</span>
						<div className="">
							<span className="text-sm font-medium bg-green-600 py-1 px-2 rounded text-white align-middle mr-1">
								Grass
							</span>
							<span className="text-sm font-medium bg-purple-600 py-1 px-2 rounded text-white align-middle">
								Poison
							</span>
						</div>
					</div>
					<div className="mt-1 flex justify-between align-center">
                        <div className="">
                            <p className="text-gray-700">Height: 0.7M</p>
                        </div>
                        <div className="">
                            <p className="text-gray-700">Height: 0.7M</p>
                        </div>
                    </div>
					<div className="mt-2">
						<p className="text-gray-700">Moves:</p>
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
						<Link to="/" className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
							Leave
						</Link>
						<button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1">
							Catch!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
