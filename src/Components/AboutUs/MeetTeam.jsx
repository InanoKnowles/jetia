import React from "react";
import classes from "./MeetTeam.module.css";
import TeamMember from "./TeamMembers";

const MeetTeam = () => {
	return (
		<div id={classes.meetTeam}>
			<TeamMember></TeamMember>
		</div>
	);
};

export default MeetTeam;
