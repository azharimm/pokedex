import React from "react";
import { bgColor } from "../utils/bgColor";
import { Link } from "react-router-dom";

const PokeItem = () => {
	return (
		<Link to="/detail">
			<div className="transform transition duration-500 hover:scale-110 motion-reduce:transform-none cursor-pointer flex justify-center items-center">
				<div className="h-56 w-72 absolute flex justify-center items-center">
					<img
						className="object-cover h-20 w-20 "
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
						alt=""
					/>
				</div>

				<div
					className={`h-56 mx-4 w-5/6 rounded-3xl shadow-md sm:w-80 sm:mx-0 ${bgColor(
						"ice"
					)}`}
				>
					<div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
						<h1 className="text-white">#1</h1>
					</div>

					<div className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center ">
						<div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-gray-500 text-xs">Type</h1>
								<h1 className="text-gray-600 text-sm">Grass</h1>
							</div>
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-gray-500 text-xs">Owned</h1>
								<h1 className="text-gray-600 text-sm">1</h1>
							</div>
						</div>
						<div className="w-full h-1/2 flex flex-col justify-center items-center">
							<h1 className="text-gray-700 font-bold">
								Bulbasaur
							</h1>
							{/* <h1 className="text-gray-500 text-sm">Bulba</h1> */}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PokeItem;
