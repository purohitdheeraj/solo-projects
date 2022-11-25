import React from "react";
import locateIcon from "../assets/locate-icon.svg";

function Tile(props) {
	return (
		<div className="tile">
			<img
				src={props.imgUrl}
				className="tile--image"
				alt={props.title}
			/>
			<div className="tile--info">
				<div className="location">
					<img
						className="location--icon"
						src={locateIcon}
						alt="locate-icon"
					/>
					<span className="location--name">
						{props.location}
					</span>

					<a
						className="location--link"
						href={props.googleMapsUrl}
					>
						View on Google Maps
					</a>
				</div>
				<h2>{props.title}</h2>
				<h4>
					{props.startDate} - {props.endDate}
				</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default Tile;
