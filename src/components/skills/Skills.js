import React from 'react'
import './skills.scss'
import { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='skills'>
    <h2>Skills</h2>
    <div className='container'>
    <div className='skill-card'>
      <p>hello</p>
    </div>
    </div>
    </section> 
  )
})

export default Skills