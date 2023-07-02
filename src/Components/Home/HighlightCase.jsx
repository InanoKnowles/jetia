import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import classes from './HighlightCase.module.css';

import case1 from '../images/caseStudies/case1.png';
import case2 from '../images/caseStudies/case2.png';
import case3 from '../images/caseStudies/case6.png';
import case4 from '../images/caseStudies/case4.png';

const HighlightCase = () => {
  return (
    <div id={classes.highlightCase}>
      <h2>Highlights</h2>

      <div className={classes.swiperDiv}>
        <Swiper className={`mySwiper ${classes.swiper}`} spaceBetween={50}>
          <SwiperSlide className={classes.case}>
            <div className={classes.slide}>
              <img className={classes.case1} src={case1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.case}>
            <div className={classes.slide}>
              <img className={classes.case2} src={case2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.case}>
            <div className={classes.slide}>
              <img className={classes.case3} src={case3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className={classes.case}>
            <div className={classes.slide}>
              <img className={classes.case4} src={case4} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

        <MediaQuery minWidth={320} maxWidth={768}>
          <p className={classes.swipeText}>← Swipe to see →</p>
        </MediaQuery>
      </div>

      <Link to="/casestudies">
        <Button>View Our Work</Button>
      </Link>
    </div>
  );
};

export default HighlightCase;
