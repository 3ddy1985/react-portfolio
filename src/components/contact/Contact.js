import React from 'react'
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='contact'>Contact</section>
  )
})

export default Contact