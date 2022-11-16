import React from "react";
import msgIcon from "../assets/Iconmsg.svg";

const CardBody = () => {
	return (
		<main className="card__main">
			<div className="card__main--intro">
				<h1>Laura Smith</h1>
				<h3>Frontend Developer</h3>
				<small>@laurasmith.website</small>
			</div>

			<button className="btn btn--cta">
				<span>
					<img src={msgIcon} />
				</span>
				Email
			</button>

			<div className="card__main--info">
				
        <h2>About</h2>
				<p>
					I am a frontend developer with a
					particular interest in making things
					simple and automating daily tasks. I try
					to keep up with security and best
					practices, and am always looking for new
					things to learn.
				</p>
				
        <h2>Interests</h2>
				<p>
					Food expert. Music scholar. Reader.
					Internet fanatic. Bacon buff.
					Entrepreneur. Travel geek. Pop culture
					ninja. Coffee fanatic.
				</p>
			</div>
		</main>
	);
};

export default CardBody;
