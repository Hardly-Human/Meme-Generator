import React, { Component } from "react";
import "./App.css";

import Header from "./header.component";
import MemeGenerator from "./memeGenerator.component";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MemeGenerator />
			</div>
		);
	}
}

export default App;
