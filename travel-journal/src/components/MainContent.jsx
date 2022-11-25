import React from "react";
import Tile from "./Tile";
import travelData from "../data";

function MainContent() {
	const tiles = travelData.map((tile) => (
		<Tile key={tile.id} {...tile} />
	));
	return <main>{tiles}</main>;
}

export default MainContent;
