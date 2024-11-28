import classes from './TeamMembers.module.css';

const TeamMember = () => {
  return (
    <div id={classes.teamMembers}>
      <div className={classes.member} id="member-1">
        <div className={`${classes.photoWrapper}`}>
          <div className={`${classes.photo1}`}></div>
          <div className="orange">
            <p>
              <span className={classes.memberName}>TINA</span>
              <br></br>
              <span id={classes.consultancyName}>
                Full Stack Software Engineer
              </span>
            </p>
          </div>
        </div>
        <div className={`${classes.memberDescOdd} `}>
          Lead the development of innovative software solutions, ensuring
          high-quality deliverables and technical excellence.
        </div>
      </div>
      <div className={classes.memberEven} id="member-2">
        <div className={`${classes.photoWrapper}`}>
          <div className={`${classes.photo2}`}></div>
          <div className="pink">
            <p>
              <span className={classes.memberName}>ESTHER</span>
              <br></br>
              <span id={classes.consultancyName}>UX/UI Designer</span>
            </p>
          </div>
        </div>
        <div className={classes.memberDescEven}>
          Create intuitive and visually appealing user experiences,
          collaborating with clients and development teams.
        </div>
      </div>
      <div className={classes.member} id="member-3">
        <div className={`${classes.photoWrapper}`}>
          <div className={`${classes.photo3}`}></div>
          <div className="armyGreen">
            <p>
              <span className={classes.memberName}>INANO KNOWLES</span>
              <br></br>
              <span id={classes.consultancyName}>Digital Consultancy</span>
            </p>
          </div>
        </div>
        <div className={classes.memberDescOdd}>
          Oversee project execution, ensuring timely completion, budget
          adherence, and client satisfaction.
        </div>
      </div>
      <div className={classes.memberEven} id="member-4">
        <div className={`${classes.photoWrapper}`}>
          <div className={`${classes.photo4}`}></div>
          <div className="taupe">
            <p>
              <span className={classes.memberName}>ANKITA</span>
              <br></br>
              <span id={classes.consultancyName}>Data Analyst</span>
            </p>
          </div>
        </div>
        <div className={classes.memberDescEven}>
          Identify and acquire new business opportunities, building
          relationships and presenting our services as solutions.
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
