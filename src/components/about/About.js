import React from 'react'
import './about.scss'
import {  forwardRef } from 'react';

 
const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='about'>
      <h2><span className='faulty-letter'>A</span> Bit Ab<span className='faulty-letter'>o</span><span className='faulty-letter'>u</span>t Me</h2>
      
      <div className="container">
        <div className='about-img'></div>
        <article>
          <h3>Nick Langley - 38</h3>
          <p><em>Frontend Developer - Junior Fullstack Developer</em></p>
          <p>As a highly adaptable and curious individual, I have a strong passion for 
            learning and discovering innovative solutions to complex challenges. 
            My technical expertise, developed in a fast-paced startup environment, 
            has sharpened my ability to swiftly acquire new skills and apply them to 
            achieve exceptional results. While I have always been a quick learner, it 
            was my transition into the IT sector that truly allowed my abilities to 
            thrive.</p>

          <p>Over the course of nine years in a dynamic startup, I have consistently 
            adapted to the ever-evolving company needs. This experience has empowered 
            me to master new technologies and devise novel procedures, driving the 
            organization's growth. In the past 2-3 years, my focus has been on 
            Microsoft and web development, crafting business flows to optimize and 
            automate daily tasks, designing visually appealing front-end brochure 
            sites, and developing a customized HubSpot template with versatile 
            drag-and-drop components.</p>

          <p>Despite facing mental health challenges since a young age, I have found 
            resilience in adversity. Last year, I reached an all-time low, but with 
            the unwavering support of my loving family and friends, I emerged stronger 
            than ever. This transformative experience not only pushed me to reevaluate 
            my priorities but also inspired me to fully immerse myself in a career 
            that genuinely ignites my passion.</p>
        </article>
      </div>
    </section>
  );
});


export default About  