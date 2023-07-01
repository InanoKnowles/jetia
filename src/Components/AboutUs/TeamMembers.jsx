import classes from "./TeamMembers.module.css";

const TeamMember = () => {
	return (
		<div id={classes.teamMembers}>
			<div className={classes.member} id="member-1">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo}`}></div>
					<div>
						<p>Inano Knowles</p>
						<p>Digital Consultancy</p>
					</div>
				</div>
				<div className={`${classes.memberDesc}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
			<div className={classes.member} id="member-2">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo}`}></div>
					<div>
						<p>Inano Knowles</p>
						<p>Digital Consultancy</p>
					</div>
				</div>
				<div className={`${classes.memberDesc}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
			<div className={classes.member} id="member-3">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo}`}></div>
					<div>
						<p>Inano Knowles</p>
						<p>Digital Consultancy</p>
					</div>
				</div>
				<div className={`${classes.memberDesc}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
			<div className={classes.member} id="member-4">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo}`}></div>
					<div>
						<p>Inano Knowles</p>
						<p>Digital Consultancy</p>
					</div>
				</div>
				<div className={`${classes.memberDesc}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
