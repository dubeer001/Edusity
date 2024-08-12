import React from 'react';
import './about.css'; // Import the updated CSS file
import img from '../assets/about.png'; // Image of the boy
import play from '../assets/play-icon.png'; // Play icon

function About({setPlayState}) {

  return (
    <div className='about'>
        <div className='about-left'>
            <img src={img} alt='About University' className='main-img' />
            <img src={play} alt='Play Icon' className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
      
        <div className='about-right'>
            <h3>About University</h3>
            <p>Nurturing Tomorrow's leaders today.</p>
            <p>At our university, we are dedicated to fostering an environment of excellence in education and values needed to excel in their chosen fields and make meaningful contributions to society. Our mission is to</p>
            <p>Our university is committed to embracing innovation and adapting to the evolving educational landscape. We offer cutting-edge programs and utilize state-of-the-art technology to enhance the learning experience. </p>
            <p>We believe in the power of community and personal growth. Our supportive and inclusive environment encourages students to engage in a wide range of extracurricular activities, research opportunities, and leadership roles.  </p>
        </div>
    </div>
  );
}
  
export default About;
