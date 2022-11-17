import React from "react";
import msgIcon from "../assets/Iconmsg.svg";

const CardBody = () => {
	return (
		<main className="card__main">
			<div className="card__main--intro">
				<h2>Dheeraj Purohit</h2>
				<h3>Frontend Developer</h3>
				<small className="card__main--intro-portfolio">
					<a href="https://dheeraj-purohit-portfolio.netlify.app">
						@dheeraj-purohit-portfolio
					</a>
				</small>
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
					Hare Krishna🙏💖 I am passionate about
					web development and have experience
					working with technologies like Html,
					Css, JavaScript, ReactJs, Sql, Figma
				</p>

				<h2>Interests</h2>
				<p>
					Chanting Hare Krishna, Devotional
					Service , Yoga, Martial Art Enthusiast,
					Devotional Songs(Kirtan-Bhajan)
				</p>
			</div>
		</main>
	);
};

export default CardBody;
