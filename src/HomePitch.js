import React from 'react';
import HomeContent from './HomeContent';
import HomeImage from './HomeImage';
import HomePitch from './HomePitch';

const HomePitch = props => (
  <div>
    <h3>So why should you hire me?</h3>
    <p>{props.answer}</p>
  </div>
  );

export default HomePitch;
