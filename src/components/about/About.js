import React from 'react'
import './about.scss'
import { useRef, useEffect, forwardRef } from 'react';


const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='about'>
      <h2>A Bit About Me</h2>

      <div className="container">
        <div className="column">
          <h3>Nick Langley - 38</h3>
          <p>As a highly adaptable and curious individual, I am passionate about learning and finding innovative solutions to challenges. My technical background in a fast-paced startup environment has honed my ability to quickly learn new skills and apply them to deliver exceptional results. I have always been a fast learner, but it wasn't until I transitioned into IT that my skills really began to flourish.

Over the course of nine years working with a startup, I have constantly adapted to the ever-changing company needs. This experience has allowed me to learn new technologies and create new procedures to help the company evolve. In the last 2-3 years, I have focused on Microsoft and web development, creating business flows to streamline and automate everyday tasks, designing front-end brochure sites, and developing a HubSpot template with custom drag-and-drop components.

From a young age, I have suffered from mental health issues, and unfortunately, last year I reached my lowest point ever. However, I am also thankful for this experience, as it, along with the support from my loving family and friends, gave me the necessary push to make the leap and transition fully into a career I am passionate about.</p>
        </div>
        <div className="column">
          
        </div>
      </div>
    </section>
  );
});


export default About 