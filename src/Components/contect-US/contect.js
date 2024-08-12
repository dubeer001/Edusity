import React from 'react';
import './contect.css'; // Ensure the CSS file name is correct
import msg from '../assets/msg-icon.png';
import mail from '../assets/mail-icon.png';
import phone from '../assets/phone-icon.png';
import location from '../assets/location-icon.png';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b92b0d0-46be-49e4-80d3-2ecabd489ed5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact'>
        <h3>Send Us a Message <img src={msg} alt='Message Icon' /></h3>
        <p>If you have any questions or need further information, please feel free to contact us. We're here to help!</p>
        <ul>
          <li><img src={mail} alt='Email Icon' className='icon mail-icon' /><strong>Email:</strong> hdubeer@gmail.com</li>
          <li><img src={phone} alt='Phone Icon' className='icon phone-icon' /><strong>Phone:</strong> 0311-1585261</li>
          <li><img src={location} alt='Location Icon' className='icon location-icon' /><strong>Location:</strong> Rawalpindi, Cambridge, Punjab, Pakistan</li>
        </ul>
      </div>  
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter Your Name' required />
          <label>Your Phone Number</label>
          <input type='text' name='phone' placeholder='Enter Your Phone Number' required />
          <label>Write Your Message Here</label>
          <textarea name='message' rows={6} placeholder='Enter your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span className="result-message">{result}</span>
      </div>
    </div>
  );
}

export default Contact;
