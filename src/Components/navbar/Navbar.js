import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='Logo' />
      <button className='toggle-btn' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="hero" duration={500} offset={0} smooth={true}>Home</Link></li>
        <li><Link to="programs" duration={500} offset={0} smooth={true}>Program</Link></li>
        <li><Link to="about" duration={500} offset={0} smooth={true}>About Us</Link></li>
        <li><Link to="campus" duration={500} offset={0} smooth={true}>Campus</Link></li>
        <li><Link to="testmonials" duration={500} offset={0} smooth={true}>Testimonials</Link></li>
        <li>
          <button className='btn'>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}
