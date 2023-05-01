import React from 'react'
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='project'>Projects</section>
  )
});

export default Projects