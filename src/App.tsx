import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
//Components
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Owned from "./pages/Owned";
import Navbar from "./components/Navbar";
//Styles
import "./App.css";

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: "https://beta.pokeapi.co/graphql/v1beta",
	});
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="container min-h-screen min-w-full bg-green-700 opacity-80">
					<Navbar />
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
