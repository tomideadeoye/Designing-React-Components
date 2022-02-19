import Header from "./Header";
import { createContext, useState } from "react";
import Speakers from "./Speakers";
import Layout from "./Layout";
import Hero from "./Hero";

function App() {
	return (
		<Layout startingTheme="light">
			<div>
				{/* <Hero /> */}
				<Header />
				<Speakers />
			</div>
		</Layout>
	);
}

export default App;
