import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
    <center>
      <p>All content and rights © 2024, See the <Link>Suhana Destination Travels</Link>{" "} & <Link to='/terms' >Terms and Conditions</Link></p>
      <a href='tel:+91-7799234560'>+91-7799234560,</a> <a href="mailto:suhanadtour@gmail.com">
              suhanadtour@gmail.com
            </a>
    </center>
  </div>
  )
}

export default Footer