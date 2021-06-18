import React, { Component } from "react";

import "./index.css";

class MemeGenerator extends Component {
	constructor() {
		super();
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: [],
		};
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((jsonData) =>
				this.setState({
					allMemeImgs: jsonData.data.memes,
				})
			);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	getRandomImg = (event) => {
		event.preventDefault();
		const randomIDX = Math.floor(
			Math.random() * this.state.allMemeImgs.length
		);
		const randomImage = this.state.allMemeImgs[randomIDX].url;
		this.setState({ randomImg: randomImage });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.getRandomImg}>
					<input
						type="text"
						placeholder="Top Text"
						name="topText"
						value={this.state.topText}
						onChange={this.handleChange}
					/>

					<input
						type="text"
						placeholder="Bottom Text"
						name="bottomText"
						value={this.state.bottomText}
						onChange={this.handleChange}
					/>
					<button type="submit">Gen</button>
				</form>

				<div className="meme">
					<img src={this.state.randomImg} alt="meme" />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;
