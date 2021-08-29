import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
	return (
		<nav className="w-full md:w-2/3 px-0 py-3 mx-auto">
			<div className="flex justify-between items-center mx-5 md:mx-0">
				<h1 className="text-white text-xl">
					<Link to="/" className="flex">
						<img
							src={logo}
							alt="logo"
							className="flex-1 w-7 mr-1"
						/>
						<span>Pokedex</span>
					</Link>
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
