import React, { forwardRef, useState } from 'react';
import './interests.scss';
import wedding from '../../assets/wedding.jpg';
import meAvani from '../../assets/meavani2.jpg';
import avani from '../../assets/avani.jpg';

const Interests = forwardRef((props, ref) => {
  const [slideIndexes, setSlideIndexes] = useState([0, 0, 0]); // one slide index for each box

  const slideImages = [
    [{ wedding }, { meAvani }, { avani }], // slides for box 1
    ['https://source.unsplash.com/1000x803', 'https://source.unsplash.com/1000x804', 'https://source.unsplash.com/1000x805'], // slides for box 2
    ['https://source.unsplash.com/1000x806', 'https://source.unsplash.com/1000x807', 'https://source.unsplash.com/1000x808'], // slides for box 3
  ];

  const startSlideShow = (boxIndex) => {
    // set a regular interval to update the slide index for the given box
    setInterval(() => {
      setSlideIndexes((prevSlideIndexes) => {
        const nextSlideIndex = (prevSlideIndexes[boxIndex] + 1) % slideImages[boxIndex].length;
        return prevSlideIndexes.map((slideIndex, index) => (index === boxIndex ? nextSlideIndex : slideIndex));
      });
    }, 2000); // change slide every 2 seconds
  };

  return (
    <section ref={ref} id='interests'>
      <h2>
        S<span className='faulty-letter'>o</span>me of <span className='faulty-letter'>m</span>y in<span className='faulty-letter'>t</span>ere
        <span className='faulty-letter'>s</span>ts
      </h2>
      <div className='container'>
        <div className='box' onMouseOver={() => startSlideShow(0)}>
          <img src={slideImages[0][slideIndexes[0]]}></img>
          <span>
            <h3>Family</h3>
          </span>
        </div>
        <div className='box' onMouseOver={() => startSlideShow(1)}>
          <img src={slideImages[1][slideIndexes[1]]}></img>
          <span>
            <h3>Baking</h3>
          </span>
        </div>
        <div className='box' onMouseOver={() => startSlideShow(2)}>
          <img src={slideImages[2][slideIndexes[2]]}></img>
          <span>
            <h3>Exotic Pets</h3>
          </span>
        </div>
      </div>
    </section>
  );

})

export default Interests