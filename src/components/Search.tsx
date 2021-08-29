import React from "react";
import { useStateValue } from "../context/StateProvider";

export type Props = {
	query: string;
	setQuery: (query: string) => void;
	handleSearch: (e: React.FormEvent, city: string) => void;
}

const Search: React.FC<Props> = ({ query, setQuery, handleSearch}) => {
	const { state } = useStateValue();
	return (
		<div className="text-center mt-4 mx-5 md:mx-auto">
			<form onSubmit={(e) => handleSearch(e, query)}>
				<div className="w-full md:w-2/3 mx-auto h-10 pl-3 pr-2 bg-green-200 border rounded-full flex justify-between items-center relative">
					<input
						type="search"
						name="search"
						id="search"
						autoComplete="off"
						placeholder="Search"
						defaultValue={state.query}
						onChange={(e) => setQuery(e.target.value)}
						required={true}
						className="appearance-none w-full bg-green-200 outline-none focus:outline-none active:outline-none"
					/>
					<button
						type="submit"
						className="ml-1 outline-none focus:outline-none active:outline-none"
					>
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							className="w-6 h-6"
						>
							<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Search;
