import React, { Component } from 'react';
import HomeContent from './HomeContent';
import HomeImage from './HomeImage';
import HomePitch from './HomePitch';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home';
  }
  render(){
    return (<HomeContent name="Niko" />,
            <HomeImage image='https://placekitten.com/200/300'/>,
            <HomePitch answer='im awesome' />
  );
  }
}

export default Home;
