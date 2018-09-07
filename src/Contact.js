import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount(){
    document.title = 'Contact Me';
  }
  render(){
    return (<div>
      <h1>Contact {this.props.name}</h1>
      <h3>{this.props.email}</h3>
      <h3>{this.props.resume}</h3>
      <a href="https://www.linkedin.com/in/nikotsafos/">{this.props.linkedin}</a>
      <a href="https://github.com/nikotsafos">{this.props.github}</a>
      </div>
    );
  }
}

export default Contact;
