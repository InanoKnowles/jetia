import React from "react";

import classes from "./OurServices.module.css";

const OurServices = () => {
	return (
		<div id={classes.list}>
			<ul>
				<li>Market Research</li>
				<li>Data Analysis</li>
				<li >Branding Strategy</li>
			</ul>

			<ul>
				<li>Digital Creative</li>
				<li>Product Design</li>
				<li>Service Design</li>
			</ul>

			<ul>
				<li>Art Direction</li>
				<li>Visual Identity</li>
				<li>Brand GuideLines</li>
			</ul>

			<ul>
				<li>Web Accessibility</li>
				<li>Interface Design</li>
				<li>User Research</li>
			</ul>

			<ul>
				<li>Mobile Design</li>
				<li>Content Production</li>
				<li>Copywriting</li>
			</ul>
		</div>
	);
};

export default OurServices;
