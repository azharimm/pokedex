import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
//Components
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Owned from "./pages/Owned";
//Styles
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://beta.pokeapi.co/graphql/v1beta",
	});
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="container min-h-screen min-w-full bg-green-700 opacity-80">
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
									<span className="sm:block">
										&nbsp;My Pokemon
									</span>
								</Link>
							</div>
						</div>
					</nav>
					<Switch>
						<Route path="/owned" exact>
							<Owned />
						</Route>
						<Route path="/detail/:id">
							<Detail />
						</Route>
						<Route path="/" exact>
							<Home />
						</Route>
					</Switch>
				</div>
			</ApolloProvider>
		</Router>
	);
}

export default App;
