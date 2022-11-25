import React from "react";
import locateIcon from "../assets/locate-icon.svg";

function Tile() {
	return (
		<div className="tile">
			<img
				src="https://images.unsplash.com/photo-1618278942403-e973260cc425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				className="tile--image"
				alt="Mount Fuji"
			/>
			<div className="tile--info">
				<div className="location">
					<img
						className="location--icon"
						src={locateIcon}
						alt="locate-icon"
					/>
					<span className="location--name">
						JAPAN
					</span>

					<a
						className="location--link"
						href="https://goo.gl/maps/yFfrGTDAKpcihWkL6"
					>
						View on Google Maps
					</a>
				</div>
				<h2>Mount Fuji</h2>
				<h4>12 Jan, 2021 - 24 Jan, 2021</h4>
				<p>
					Mount Fuji is the tallest mountain in
					Japan, standing at 3,776 meters (12,380
					feet). Mount Fuji is the single most
					popular tourist site in Japan, for both
					Japanese and foreign tourists.
				</p>
			</div>
		</div>
	);
}

export default Tile;
