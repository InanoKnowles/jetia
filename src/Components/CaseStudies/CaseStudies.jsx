import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import classes from './CaseStudies.module.css';

const CaseStudies = () => {
  return (
    <div id={classes.caseStudies}>
      <h1 className={classes.heading}>
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT
        <span className={classes.circle}>◯</span>
      </h1>

      {/* START OF WHOLE SEGMENT 1*/}
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <a href="https://inanoknowles.github.io/">
          <div className={classes.case1}></div>
        </a>
      </Swiper>
      <div className={classes.details}>
        <h2>PROJECT NAME</h2>
        <div className={classes.list}>
          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
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
        <h2>PROJECT NAME</h2>
        <div className={classes.list}>
          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
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
        <h2>PROJECT NAME</h2>
        <div className={classes.list}>
          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
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
        <h2>PROJECT NAME</h2>
        <div className={classes.list}>
          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
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
        <h2>PROJECT NAME</h2>
        <div className={classes.list}>
          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
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
        <h2>PROJECT NAME</h2>
        <div className={classes.list}>
          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>

          <div>
            <p>keywords</p>
          </div>
        </div>
      </div>
      {/* END OF WHOLE SEGMENT 56*/}
    </div>
  );
};

export default CaseStudies;
