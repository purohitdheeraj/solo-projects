import React from "react";

import Footer from "./components/CardFooter";
import Main from "./components/CardBody";
import CardHeader from "./components/CardHeader";

const Card = () => {
	return (
		<div className="card--wrapper">
			<div className="card">
				<CardHeader />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default Card;
