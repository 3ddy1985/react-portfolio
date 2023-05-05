import React from 'react';
import Html from '../../assets/badges/html.png';
import Css from '../../assets/badges/css.png';
import Js from '../../assets/badges/javascript.png';
import react from '../../assets/badges/react.png';
import Huble from '../../assets/badges/hubspot.png';
import Bootstrap from '../../assets/badges/bootstrap.png';
import Taiwind from '../../assets/badges/tailwind.png';
import MaterialUI from '../../assets/badges/materialui.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';
// import Css from '../../assets/badges/css.png';


const SkillItems = ({ activeBadge, badgeRect }) => {
  const skills = {
    Frontend: [Html, Css, Js, react, Huble, Bootstrap, Taiwind, MaterialUI],
    Backend: ['Node.js', 'Express', 'Python', 'Django'],
    Tools: ['Git', 'Webpack', 'Docker', 'AWS'],
    'Soft Skills': ['Communication', 'Teamwork', 'Problem Solving', 'Time Management'],
  };

  if (!activeBadge || !skills[activeBadge] || !badgeRect) {
    return null;
  }

  const skillItems = skills[activeBadge].map((skill, index, arr) => {
    const angle = (2 * Math.PI * index) / arr.length;
    const x = badgeRect.x + badgeRect.width / 2 + 120 * Math.cos(angle);
    const y = badgeRect.y + badgeRect.height / 2 + 120 * Math.sin(angle);
    return (
      <div key={skill} className='skill-item' style={{ position: 'absolute', left: x, top: y}}>
        <img src={skill} />
      </div>
    );
  });

  return <>{skillItems}</>;
};

export default SkillItems;

