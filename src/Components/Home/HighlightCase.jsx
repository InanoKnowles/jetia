import React from 'react';

import classes from './HighlightCase.module.css';

const HighlightCase = () => {
  return (
    <div id={classes.highlightCase}>
      <h2>Highlight Case</h2>
      <div className={classes.case}>img + text maybe on hover? - carousel </div>
    </div>
  );
};

export default HighlightCase;
