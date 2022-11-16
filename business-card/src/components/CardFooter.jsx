import React from "react";
import facebookIcon from "../assets/facebook-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import linkedInIcon from "../assets/linkedin-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";

const Footer = () => {
	return (
		<footer className="card__footer">
			<ul className="card__footer--icons">
				<li className="icon">
					<a href="facebook.com">
						<img
							src={facebookIcon}
							alt="facebook "
						/>
					</a>
				</li>

				<li className="icon">
					<a href="github.com">
						<img
							src={githubIcon}
							alt="github"
						/>
					</a>
				</li>

				<li className="icon">
					<a href="instagram.com">
						<img
							src={instagramIcon}
							alt="instagram"
						/>
					</a>
				</li>

				<li className="icon">
					<a href="linkedin.com">
						<img
							src={linkedInIcon}
							alt="linkedIn"
						/>
					</a>
				</li>

				<li className="icon">
					<a href="">
						<img
							src={twitterIcon}
							alt="twitter"
						/>
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
