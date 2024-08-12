import React, { useState } from 'react';
import next from '../assets/next-icon.png';
import back from '../assets/back-icon.png';
import user1 from '../assets/user-1.jpg';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
import user4 from '../assets/user-4.png';
import './Testimonials.css';

const testimonials = [
  {
    img: user1,
    name: 'Dubeer Jafrii',
    institution: 'Szabist, ISB',
    review: 'Joining this university was the best decision I made. The quality of education and the support from faculty have been exceptional!'
  },
  {
    img: user2,
    name: 'Ayesha Khan',
    institution: 'Szabist, ISB',
    review: 'A fantastic experience with great learning opportunities. The courses are well-structured and the campus life is vibrant!'
  },
  {
    img: user3,
    name: 'Ali Raza',
    institution: 'Szabist, ISB',
    review: 'The university provided an excellent platform for growth and development. The facilities and resources are top-notch.'
  },
  {
    img: user4,
    name: 'Sara Ahmed',
    institution: 'Szabist, ISB',
    review: 'I have gained invaluable skills and knowledge here. The supportive environment and diverse student community make it a great place to study!'
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div id='testmonials' className='container'>
     console.log('container');
      
      <img src={back} alt='Back' className='back' onClick={prevReview} />
      <div className='slider'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='user-info'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={testimonial.img} alt='User-Image' />
            <div>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.institution}</span>
              <p>{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
      <img src={next} alt='Next' className='next' onClick={nextReview} />
    
    </div>
  );
}

export default Testimonials;
