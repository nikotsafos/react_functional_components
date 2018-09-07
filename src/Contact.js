import React, { Component } from 'react';
import ContactDetails from './ContactDetails';

class Contact extends Component {
  componentDidMount(){
    document.title = 'Contact Me';
  }
  render(){
    return (
      <div>
        <h1>Contact {this.props.name}</h1>
        <ContactDetails
          email="a@b.com"
          linkedin="https://linkedin.com"
          resume="http://creddle.com"
          github="https://github.com/WDI-SEA" />
      </div>
      );
  }
}

export default Contact;
