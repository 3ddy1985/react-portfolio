import React from 'react'
import { forwardRef } from 'react';

const Interests = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='interests'>Interests</section>
  )
})

export default Interests