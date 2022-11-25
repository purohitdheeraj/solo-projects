import React from "react";
import globeIcon from "../assets/globe-icon.svg";
function Header() {
	return (
		<header>
			<img
				className="header--logo"
				src={globeIcon}
				alt="globe icon"
			/>
			My Travel Journal
		</header>
	);
}

export default Header;
