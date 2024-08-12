import React from 'react';
import img_1 from '../assets/gallery-1.png';
import img_2 from '../assets/gallery-2.png';
import img_3 from '../assets/gallery-3.png';
import img_4 from '../assets/gallery-4.png';
import button1 from '../assets/white-arrow.png';
import './campus.css'; // Import the CSS file for styling

function Campus() {
  return (
    <div id='campus' className="campus-container">
      <div className='gallery'>
        <img src={img_1} alt='gallery' className="gallery-image" />
        <img src={img_2} alt='gallery' className="gallery-image" />
        <img src={img_3} alt='gallery' className="gallery-image" />
        <img src={img_4} alt='gallery' className="gallery-image" />
      </div>
      <button className='btn dark-btn'> 
        See More Here 
        <img src={button1} alt='none'/> 
      </button>
    </div>
  );
}

export default Campus;
 