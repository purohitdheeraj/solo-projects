import React from "react";
import Tile from "./Tile";
import travelData from "../data";

function MainContent() {
	const tiles = travelData.map((tile) => (
		<Tile {...tile} />
	));
	return <main>{tiles}</main>;
}

export default MainContent;
