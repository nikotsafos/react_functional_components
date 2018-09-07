import React, { Component } from 'react';

class Home extends Component {
  componentDidMount(){
    document.title = 'Home';
  }
  render(){
    return (<h1>HOME PAGE</h1>);
  }
}

export default Home;
