import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import classes from './HighlightCase.module.css';

const HighlightCase = () => {
  return (
    <div id={classes.highlightCase}>
      <h2>Highlight Case</h2>
      <Swiper className={`mySwiper ${classes.swiper}`}>
        <SwiperSlide className={classes.case}>
          img + text maybe on hover? - carousel{' '}
        </SwiperSlide>
        <SwiperSlide className={classes.case}>
          img + text maybe on hover? - carousel{' '}
        </SwiperSlide>
        <SwiperSlide className={classes.case}>
          img + text maybe on hover? - carousel{' '}
        </SwiperSlide>
        <SwiperSlide className={classes.case}>
          img + text maybe on hover? - carousel{' '}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HighlightCase;
