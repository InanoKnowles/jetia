import React from "react";

import classes from "./AboutUs.module.css";
import OurServices from "./OurServices";

const AboutUs = () => {
	return (
		<div id={classes.aboutUs}>
			<section id={classes.whoweare}>
				<h1 id={classes.heading}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</h1>
				<p id={classes.decription}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident,
				</p>
			</section>
			<section className={classes.aboutus}>
				We are an international team of passionate designers, developers, brand
				strategists & data analysts.
			</section>
			<div>Intro</div>
			<h1 id={classes.passtionatestmt}>
				We are an international team of passionate designers, developers, brand
				strategists & data analysts.
			</h1>
			<OurServices></OurServices>
		</div>
	);
};

export default AboutUs;
