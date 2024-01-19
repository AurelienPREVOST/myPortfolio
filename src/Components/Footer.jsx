import React from 'react';
import githubIcon from '../assets/illustrations/github.svg';

function Footer() {
  return (
    <div className="footer">
      <span>aurelienprevost77@gmail.com</span>
      <span>06 80 77 57 22</span>
      <span>(86) Vienne - Poitiers</span>
      <a href="https://github.com/AurelienPREVOST">
        <img src={githubIcon} alt="GitHub Icon" />
      </a>
    </div>
  );
}

export default Footer;
