import React from "react";
import reactLogo from "../assets/react.svg";

function Header() {
	return (
		<header>
			<nav className="nav">
				<img
					className="nav--logo_img"
					src={reactLogo}
					alt="react-logo"
				/>
				<h3 className="nav--logo_text">
					React Facts
				</h3>
				<h4 className="nav--text">
					React Project 1
				</h4>
			</nav>
		</header>
	);
}

export default Header;
