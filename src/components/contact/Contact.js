// Contact.js

import React from 'react';
import './Contact.css';
import githubIcon from '../../resources/githubicon.png';
import instagramIcon from '../../resources/instagramicon.png';
import linkedinIcon from '../../resources/linkedinicon.png';
import emailIcon from '../../resources/emailicon.png';
import phoneIcon from '../../resources/phoneicon.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className='centerClass'>Contact Me</h1>
      <p className='centerClass'>Feel free to reach out through any of the following channels:</p>

      <div className="social-iconsC">
        <a className='social-linkC' href="https://github.com/Sudhanva1999" target="_blank" rel="noopener noreferrer">
          <img className="social-iconC" src={githubIcon} alt="GitHub" />
          GitHub
        </a>
        <a className='social-linkC' href="https://www.instagram.com/sudhanva1999/" target="_blank" rel="noopener noreferrer">
          <img className="social-iconC" src={instagramIcon} alt="Instagram" />
          Instagram
        </a>
        <a  className='social-linkC' href="https://www.linkedin.com/in/sudhanvapaturkar/" target="_blank" rel="noopener noreferrer">
          <img className="social-iconC" src={linkedinIcon} alt="LinkedIn" />
          LinkedIn
        </a>
        <a  className='social-linkC' href="mailto:paturkar.s@northeastern.edu">
          <img className="social-iconC" src={emailIcon} alt="Email" />
          paturkar.s@northeastern.edu
        </a>
        <a  className='social-linkC' href="tel:+617-785-7242">
          <img className="social-iconC" src={phoneIcon} alt="Phone" />
          +617-785-7242
        </a>
      </div>
    </div>
  );
};

export default Contact;
