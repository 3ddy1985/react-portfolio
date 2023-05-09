import React, { forwardRef, useRef, useState, useEffect } from 'react';
import './interests.scss';
import wedding from '../../assets/group.jpg';
import meAvani from '../../assets/meavani2.jpg';
import avaniMe from '../../assets/meavani.jpg'
import weddingCake from '../../assets/toilet.jpg';
import trainer from '../../assets/trainer.jpg';
import pirate from '../../assets/pirate.jpg';
import tarantula from '../../assets/pet-tarantula.jpg';
import chameleon from '../../assets/chameleon.jpg';
import snake from '../../assets/Snakes-and-Pets.jpg'; 

const Interests = forwardRef((props, ref) => {
  const [slideIndexes, setSlideIndexes] = useState([0, 0, 0]); // one slide index for each box

  const slideImages = [
    [wedding, meAvani, avaniMe], // slides for box 1
    [trainer, weddingCake, pirate], // slides for box 2
    [chameleon, tarantula, snake], // slides for box 3
  ];

  const stopSlideShowRef = useRef(null);

  const startSlideShow = (boxIndex) => {
    let intervalId;
    // set a regular interval to update the slide index for the given box
    const startInterval = () => {
      intervalId = setInterval(() => {
        setSlideIndexes((prevSlideIndexes) => {
          const nextSlideIndex = (prevSlideIndexes[boxIndex] + 1) % slideImages[boxIndex].length;
          return prevSlideIndexes.map((slideIndex, index) => (index === boxIndex ? nextSlideIndex : slideIndex));
        });
      }, 2000); // change slide every 2 seconds
    };
    startInterval();
    return () => {
      clearInterval(intervalId);
      resetSlideShow(boxIndex);
    };
  };

  const resetSlideShow = (boxIndex) => {
    setSlideIndexes((prevSlideIndexes) =>
      prevSlideIndexes.map((slideIndex, index) => (index === boxIndex ? 0 : slideIndex))
    );
  };

  const isMobile = () => window.innerWidth <= 600;

  useEffect(() => {
    if (isMobile()) {
      const stopSlideShow0 = startSlideShow(0);
      const stopSlideShow1 = startSlideShow(1);
      const stopSlideShow2 = startSlideShow(2);
      return () => {
        stopSlideShow0();
        stopSlideShow1();
        stopSlideShow2();
      };
    }
  }, [startSlideShow]);

  return (
    <section ref={ref} id='interests'>
      <h2>
        S<span className='faulty-letter'>o</span>me of <span className='faulty-letter'>m</span>y in<span className='faulty-letter'>t</span>ere
        <span className='faulty-letter'>s</span>ts
      </h2>
      <div className='container'>
        <div
          className='box'
          onMouseEnter={() => {
            stopSlideShowRef.current = startSlideShow(0);
          }}
          onMouseLeave={() => {
            if (stopSlideShowRef.current) {
              stopSlideShowRef.current();
            }
          }}
        >
          <img src={slideImages[0][slideIndexes[0]]} alt='slide'></img>
          <div className='overlay'>
            <p>Family is the backbone of my life. It's what drives me to be the best 
              version of myself, and to work hard to provide for my loved ones. My wife 
              and I share a deep bond, and our relationship has only grown stronger 
              with time. We're partners in every sense of the word, and I'm so lucky 
              to have her by my side. Our daughter is the light of our lives, and 
              watching her grow and learn is a constant source of wonder and amazement.
                <br></br>
                <br></br>
              We cherish the time we spend together, whether it's cooking dinner as a 
              family or taking long walks in the park. Our bond is unbreakable, and I 
              know that no matter what challenges come our way, we'll always be there 
              for each other. Being a father and a husband is the greatest privilege I 
              could ever ask for, and I'm grateful every day for the love and support 
              of my family.</p>
          </div>
          <span>
            <h3>Family</h3>
          </span>
        </div>
        <div
          className='box'
          onMouseEnter={() => {
            stopSlideShowRef.current = startSlideShow(1);
          }}
          onMouseLeave={() => {
            if (stopSlideShowRef.current) {
              stopSlideShowRef.current();
            }
          }}
        >
          <img src={slideImages[1][slideIndexes[1]]} alt='slide'></img>
          <div className='overlay'>
            <p>Baking is a creative outlet that I'm truly passionate about. There's 
              nothing quite like whipping up a scrumptious dessert from scratch and 
              seeing the joy on people's faces when they take that first delicious 
              bite. Over the years, I've crafted some truly impressive birthday cakes, 
              such as a Nike trainer cake, a pirate ship cake, and even a toilet roll 
              cake (which was an inside joke with a friend). I've also experimented 
              with wedding cakes, which require a lot of patience and skill, but the 
              final product is always a sight to behold. Baking brings me so much joy 
              and allows me to express my creativity in the sweetest way possible.</p>
          </div>
          <span>
            <h3>Baking</h3>
          </span>
        </div>
        <div
          className='box'
          onMouseEnter={() => {
            stopSlideShowRef.current = startSlideShow(2);
          }}
          onMouseLeave={() => {
            if (stopSlideShowRef.current) {
              stopSlideShowRef.current();
            }
          }}
        >
          <img src={slideImages[2][slideIndexes[2]]} alt='slide'></img>
          <div className='overlay'>
            <p>One of the things I love about exotic pets is that they are so different 
              from the usual cats and dogs that people usually keep as pets. 
              Each one has its unique needs and personalities, and it's a great 
              opportunity to learn about different species and their habitats. My 
              collection included some rare and hard-to-find species, and it was always 
              a thrill to see them thrive under my care.
                <br></br>
                <br></br>
              Unfortunately, due to various circumstances, I had to give up my 
              collection. However, I still have a deep passion for exotic animals and 
              love learning about them. I'm hoping that someday soon, I'll be able to 
              start a new collection and share my love of these creatures with others.</p>
          </div>
          <span>
            <h3>Exotic Pets</h3>
          </span>
        </div>
        </div>
    </section>
  );
})

export default Interests
