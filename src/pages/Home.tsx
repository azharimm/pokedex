import React from "react";
import Search from "../components/Search";
import PokeItem from "../components/PokeItem";

const Home = () => {
	return (
		<div>
			<Search />
			<div className="container w-full md:w-2/3 mx-auto mt-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<PokeItem />
					<PokeItem />
					<PokeItem />
					<PokeItem />
					<PokeItem />
					<PokeItem />
                    
				</div>
			</div>
		</div>
	);
};

export default Home;
