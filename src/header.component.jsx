import React from "react";
import trollFace from "./troll-face.png";

const Header = () => {
	return (
		<header>
			<img src={trollFace} alt="logo-img" />
			<p>Meme Generator</p>
		</header>
	);
};

export default Header;
