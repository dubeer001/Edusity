import React from 'react';
import './hero.css';
import arrow from '../assets/dark-arrow.png';

function Hero() {
  return (
    <div className='hero-text'>
      <div className='hero'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          The purpose is to promote student achievement and preparation for global competitiveness by fostering educational excellence and ensuring equal access.
        </p>
        <button className='btn'>
          Explore More <img src={arrow} alt='arrow' />
        </button>
      </div>
    </div>
  );
}

export default Hero;
