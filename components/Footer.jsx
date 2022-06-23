import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Hassan Store All rights reserverd</p>
      <p className="icons">
        <a href='https://twitter.com/itsHurohu' target="_blank"><AiOutlineTwitter /></a>
      </p>
    </div>
  )
}

export default Footer