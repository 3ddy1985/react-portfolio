import React, { useState, useRef, useEffect, forwardRef } from 'react';
import './skills.scss';

import Html from '../../assets/badges/html.png';
import Css from '../../assets/badges/css.png';
import Js from '../../assets/badges/javascript.png';
import react from '../../assets/badges/react.png';
import Huble from '../../assets/badges/hubspot.png';
import Bootstrap from '../../assets/badges/bootstrap.png';
import Taiwind from '../../assets/badges/tailwind.png';
import MaterialUI from '../../assets/badges/materialui.png';

import Rails from '../../assets/badges/rails.png';
import NodeJS from '../../assets/badges/node.png';
import MongoDB from '../../assets/badges/mongo.png';
import PostgrSQL from '../../assets/badges/postgres.png';

import GitHub from '../../assets/badges/git.png';
import HubSpot from '../../assets/badges/hubspot.png';
import Heroku from '../../assets/badges/heroku.png';
import Firebase from '../../assets/badges/firebase.png';
import DevOps from '../../assets/badges/azure-devops.png';
import PowerAutomate from '../../assets/badges/automate.webp';
import PowerBI from '../../assets/badges/bi.png';
import SharePoint from '../../assets/badges/sharepoint.png';

import ProblemSolving from '../../assets/badges/problem.png';
import Creative from '../../assets/badges/creative.png';
import Adaptable from '../../assets/badges/adapter.png';
import OutsideBox from '../../assets/badges/outside.png';
import Communication from '../../assets/badges/coms.png';
import CritThinking from '../../assets/badges/bi.png';
import CustomerService from '../../assets/badges/customer.png';

const skillCategories = [
  {
    name: 'frontend',
    badges: [
      { img: Html, id: 'html', text: 'HTML' },
      { img: Css, id: 'css', text: 'CSS' },
      { img: Js, id: 'js', text: 'Javascript' },
      { img: react, id: 'react', text: 'React' },
      { img: Huble, id: 'huble', text: 'Huble (HubSpot)' },
      { img: Bootstrap, id: 'bootstrap', text: 'Bootstrap' },
      { img: Taiwind, id: 'tailwind', text: 'Tailwind' },
      { img: MaterialUI, id: 'materialUI', text: 'Material UI' },
    ],
  },
  {
    name: 'backend',
    badges: [
      { img: Rails, id: 'rails', text: 'Ruby on Rails' },
      { img: NodeJS, id: 'nodejs', text: 'NodeJS' },
      { img: MongoDB, id: 'mongodb', text: 'MongoDB' },
      { img: PostgrSQL, id: 'postgrsql', text: 'PostgrSQL' },
    ],
  },
  {
    name: 'tools',
    badges: [
      { img: GitHub, id: 'GitHub', text: 'GitHub' },
      { img: HubSpot, id: 'HubSpot', text: 'HubSpot' },
      { img: Heroku, id: 'Heroku', text: 'Heroku' },
      { img: Firebase, id: 'Firebase', text: 'Firebase' },
      { img: DevOps, id: 'DevOps', text: 'DevOps' },
      { img: PowerAutomate, id: 'PowerAutomate', text: 'Power Automate' },
      { img: PowerBI, id: 'PowerBI', text: 'Power BI' },
      { img: SharePoint, id: 'SharePoint', text: 'SharePoint' },
    ],
  },
  {
    name: 'Soft Skills',
    badges: [
      { img: ProblemSolving, id: 'ProblemSolving', text: 'Problem Solving' },
      { img: Creative, id: 'Creative', text: 'Creative Thinking' },
      { img: Adaptable, id: 'Adaptable', text: 'Adaptable' },
      { img: OutsideBox, id: 'OutsideBox', text: 'Thinking Outside The Box' },
      { img: Communication, id: 'Communication', text: 'Communication' },
      { img: CritThinking, id: 'CritThinking', text: 'Critical Thinking' },
      { img: CustomerService, id: 'CustomerService', text: 'Customer Service' },
    ],
  },
];

const Skills = forwardRef((props, ref) => {
  const [visibleBadges, setVisibleBadges] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [activeBadge, setActiveBadge] = useState(null);
  const frontendBadgeRef = useRef();
  const [visibleSkillBadges, setVisibleSkillBadges] = useState(0);
  const badgeRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (buttonClicked && visibleBadges < 4) {
      const timer = setTimeout(() => {
        setVisibleBadges(visibleBadges + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleBadges, buttonClicked]);

  useEffect(() => {
    const currentCategory = skillCategories.find((category) => category.name === activeBadge);
    if (currentCategory && visibleSkillBadges < currentCategory.badges.length) {
      const timer = setTimeout(() => {
        setVisibleSkillBadges(visibleSkillBadges + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleSkillBadges, activeBadge, skillCategories]);


  const handleClick = () => {
    if (buttonClicked) {
      setButtonClicked(false);
      setVisibleBadges(0);
    } else {
      setButtonClicked(true);
    }
    if (activeBadge) {
      setActiveBadge(null);
      setVisibleSkillBadges(0);
    }
  };

  const handleBadgeClick = (badge) => {
    if (badge === activeBadge) {
      setActiveBadge(null);
      setVisibleSkillBadges(0);
    } else {
      setActiveBadge(badge);
      setVisibleSkillBadges(0);
    }
    // Close key skills when frontend is clicked
    if (buttonClicked) {
      setButtonClicked(false);
      setVisibleBadges(0);
    }
  };

  return (
    <section ref={ref} id='skills'>
      <h2>My <span>S<span className='faulty-letter'>k</span>ills</span></h2>
      <div className='container'>
        <div className='key-skills-wrapper'>
          <div className='key-skills-group'>

            <div className='key-skills-badge' style={{ opacity: visibleBadges >= 1 ? 1 : 0 }}>
              <h3>Adept</h3>
              <p>Quick learner with the ability to rapidly acquire and apply new skills and knowledge.</p>
            </div>

            <div className='key-skills-badge' style={{ opacity: visibleBadges >= 2 ? 1 : 0 }}>
              <h3>Philomath</h3>
              <p>Eager to learn and explore new technologies, programming languages, and tools.</p>
            </div>
          </div>

          <div className='skills-btn' onClick={handleClick}>
            <h3>Key Skills</h3>
          </div>

          <div className='key-skills-group'>
            <div className='key-skills-badge' style={{ opacity: visibleBadges >= 3 ? 1 : 0 }}>
              <h3>So-lu-tion-ist</h3>
              <p>Excellent problem-solving skills, with a focus on finding creative and efficient solutions.</p>
            </div>

            <div className='key-skills-badge' style={{ opacity: visibleBadges >= 4 ? 1 : 0 }}>
              <h3>Malleable</h3>
              <p>Highly adaptable to new situations and environments, with a focus on continuous improvement.</p>
            </div>
          </div>
        </div>

        {/* Skills with skill badges */}
        <div className='skills-wrapper'>
          {skillCategories.map((category, catIndex) => (
            <div key={category.name} className='skills-container'>
              <div
                ref={(el) => (badgeRefs.current[catIndex] = el)}
                className='skills-badge'
                onClick={() => handleBadgeClick(category.name)}
              >
                <h3>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h3>
              </div>
              {activeBadge === category.name &&
                category.badges.map((badge, index) => {
                  const angle = (index * (360 / category.badges.length)) * (Math.PI / 180);
                  const radius = windowWidth <= 600 ? 120 : windowWidth <= 820 ? 200 : 120;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  return (
                    <div
                      key={badge.id}
                      className='skill-item'
                      style={{
                        opacity: visibleSkillBadges > index ? 1 : 0,
                        position: 'absolute',
                        top: badgeRefs.current[catIndex].offsetTop + y + (windowWidth <= 600 ? 20 : windowWidth <= 820 ? 40 : 25),
                        left: badgeRefs.current[catIndex].offsetLeft + x + (windowWidth <= 600 ? 20 : windowWidth <= 820 ? 40 : 25),
                      }}
                      data-tooltip={badge.text}
                    >
                      <img src={badge.img} alt={badge.id} data-bs-toggle="tooltip" data-bs-placement="top" title={badge.text} />
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;