import React from "react";

import classes from "./OurServices.module.css";

const OurServices = () => {
	return (
		<div id={classes.list}>
			<ul>
				<li>Market Research</li>
				<li>Data Analysis</li>
				<li className={`${classes} orange`}>Branding Strategy</li>
			</ul>

			<ul>
				<li className={`${classes} blue`}>Digital Creative</li>
				<li>Product Design</li>
				<li>Service Design</li>
			</ul>

			<ul>
				<li>Art Direction</li>
				<li className={`${classes} armyGreen`}>Visual Identity</li>
				<li>Brand GuideLines</li>
			</ul>

			<ul>
				<li>Web Accessibility</li>
				<li className={`${classes} pink`}>Interface Design</li>
				<li>User Research</li>
			</ul>

			<ul>
				<li className={`${classes} taupe`}>Mobile Design</li>
				<li>Content Production</li>
				<li>Copywriting</li>
			</ul>
		</div>
	);
};

export default OurServices;
