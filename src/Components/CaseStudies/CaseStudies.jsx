import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import classes from './CaseStudies.module.css';

const CaseStudies = () => {
  return (
    <div id={classes.caseStudies}>
      <h1 className={classes.heading}>
        WE UPHOLD HIGH STANDARDS, EMBRACE CREATIVITY, STRIVE TO THE DIGITAL
        BOUNDARIES
        <span className={classes.circle}>◯</span>
      </h1>

      {/* START OF WHOLE SEGMENT 1*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case1}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="blue">POKE BATTLES</h2>
        <div className={classes.list}>
          <div>
            <p>Fun</p>
          </div>

          <div>
            <p>Game Development</p>
          </div>

          <div>
            <p>Page Application</p>
          </div>

          <div>
            <p>Teamwork</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 1*/}

      {/* START OF WHOLE SEGMENT 2*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case2}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="pink">TIC-TAC-TOE</h2>
        <div className={classes.list}>
          <div>
            <p>Game Development</p>
          </div>

          <div>
            <p>Multiplayer</p>
          </div>

          <div>
            <p>Fun</p>
          </div>

          <div>
            <p>Frontend</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 2*/}

      {/* START OF WHOLE SEGMENT 3*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case3}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="armyGreen">INANO'S PORTFOLIO</h2>
        <div className={classes.list}>
          <div>
            <p>JavaScript</p>
          </div>

          <div>
            <p>HTML</p>
          </div>

          <div>
            <p>CSS</p>
          </div>

          <div>
            <p>DOM</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 3*/}

      {/* START OF WHOLE SEGMENT 4*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case4}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="orange">TINA'S PORTFOLIO</h2>
        <div className={classes.list}>
          <div>
            <p>React</p>
          </div>

          <div>
            <p>Single Page</p>
          </div>

          <div>
            <p>Responsive</p>
          </div>

          <div>
            <p>Interactive</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 4*/}

      {/* START OF WHOLE SEGMENT 5*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case5}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="blue">TIC-TAC-TOE</h2>
        <div className={classes.list}>
          <div>
            <p>Game Development</p>
          </div>
          <div>
            <p>Multiplayer</p>
          </div>
          <div>
            <p>Fun</p>
          </div>
          <div>
            <p>Frontend</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 5*/}

      {/* START OF WHOLE SEGMENT 6*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case6}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="pink">VOYAGE</h2>
        <div className={classes.list}>
          <div>
            <p>Travel</p>
          </div>

          <div>
            <p>CRUD App</p>
          </div>

          <div>
            <p>Planner</p>
          </div>

          <div>
            <p>Event</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 6*/}

      {/* START OF WHOLE SEGMENT 7*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case7}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="armyGreen">NOTING</h2>
        <div className={classes.list}>
          <div>
            <p>To-Do List</p>
          </div>

          <div>
            <p>Ruby</p>
          </div>

          <div>
            <p>Sinatra</p>
          </div>

          <div>
            <p>Branding</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 7*/}

      {/* START OF WHOLE SEGMENT 8*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case8}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2 className="orange">GIPHYMAN</h2>
        <div className={classes.list}>
          <div>
            <p>API</p>
          </div>

          <div>
            <p>Game Development</p>
          </div>

          <div>
            <p>Fun</p>
          </div>

          <div>
            <p>React</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 8*/}
    </div>
  );
};

export default CaseStudies;
