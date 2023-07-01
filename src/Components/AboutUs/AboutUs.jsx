import React from "react";

import classes from "./AboutUs.module.css";
import OurServices from "./OurServices";

const AboutUs = () => {
	return (
		<div id={classes.aboutUs}>
			<section id={classes.whoweare}>
				<div id={classes.empowerSection}>
					<h2 id={classes.heading}>
						We empower female entrepreneurs to thrive in the digital world<span className={classes.circle}>◯</span>
					</h2>
				</div>

				<p id={classes.decription}>
					We understand the specific challenges and opportunities that female
					entrepreneurs face in today's digital landscape. We believe in
					harnessing the power of technology, creativity, and innovation to help
					women overcome these challenges and build businesses that align with
					their passions and aspirations.
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

			<div id={classes.supportText}>
				Wheather You're starting out or looking to Expand Presence.We are here
				to provideyou with the tools,strategies,and support you need.
			</div>
			<OurServices></OurServices>
		</div>
	);
};

export default AboutUs;
