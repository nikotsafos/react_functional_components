import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount(){
    document.title = 'Contact Me';
  }
  render(){
    return (<h1>Contact {this.props.name}</h1>);
  }
}

export default Contact;
