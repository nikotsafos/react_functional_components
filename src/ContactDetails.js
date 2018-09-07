import React from 'react';

const ContactDetails = props => (
  <div>
    <a href={props.linkedin}>Linked In</a>
    <a href={props.github}>Github</a>
    <a href={props.email}>Email</a>
    <a href={props.resume}>Resume</a>
  </div>
  );

export default ContactDetails;
