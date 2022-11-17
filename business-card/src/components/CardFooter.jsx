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
					<a href="https://www.facebook.com/dheeraj.purohit.942">
						<img
							src={facebookIcon}
							alt="facebook "
						/>
					</a>
				</li>

				<li className="icon">
					<a href="https://github.com/purohitdheeraj">
						<img
							src={githubIcon}
							alt="github"
						/>
					</a>
				</li>

				<li className="icon">
					<a href="https://www.instagram.com/theindianyoga/">
						<img
							src={instagramIcon}
							alt="instagram"
						/>
					</a>
				</li>

				<li className="icon">
					<a href="https://www.linkedin.com/in/dheeraj-purohit-79ba4a168/">
						<img
							src={linkedInIcon}
							alt="linkedIn"
						/>
					</a>
				</li>

				<li className="icon">
					<a href="https://twitter.com/the_indianyoga">
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
