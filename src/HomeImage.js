import React from 'react';
import HomeContent from './HomeContent';
import HomeImage from './HomeImage';
import HomePitch from './HomePitch';

const HomeImage = props => (
  <div>
    <h1>HOME image stuff</h1>
    {props.image}
  </div>
  );

export default HomeImage;
