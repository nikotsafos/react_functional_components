import React, { Component } from 'react';
import HomeContent from './Home/HomeContent';
import HomeImage from './Home/HomeImage';
import HomePitch from './Home/HomePitch';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home';
  }
  render(){
    return (
      <div>
        <HomeContent name="Brandi" />
        <HomeImage image="https://fillmurray.com/200/300" />
        <HomePitch />
      </div>
      );
  }
}

export default Home;
