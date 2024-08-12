import React, { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/hero';
import Title from './Components/Title/title';
import Program from './Components/programs/programs';
import About from './Components/About/about';
import Campus from './Components/campus/campus';
import Contect from './Components/contect-US/contect';
import Testimonials from './Components/Testimonials/testmonials';
import Footer from './Components/Footer/footer';
import Video from './Components/VideoPlayer/VideoPlayer';
import './App.css';

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <div className="content-container">
        <Title title='Our Program' subTitle='What we Offer' />
        <Program id="programs" />
        <About id="about" setPlayState={setPlayState} />
        <Title title='Gallery' subTitle='Campus Photos' />
        <Campus id="campus" />
        <Title title='Testimonials' subTitle='What Student Says' />
        <Testimonials id="testimonials" />
        <Title title='CONTACT US' subTitle='Get IN Touch' />
        <Contect id="contact" />
        <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
