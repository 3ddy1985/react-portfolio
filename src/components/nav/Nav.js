import React, { useState } from 'react';
import './nav.scss';
import { RxPinTop } from 'react-icons/rx';
import { BsInfoCircleFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { AiFillProject } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsChatLeftTextFill } from 'react-icons/bs';

const Nav = ({ activeSection, setActiveSection, showNav }) => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

    return (
      <nav className={!showNav ? 'hidden' : ''}>
        <div className="menu-toggle" onClick={handleToggleClick}>&#9776;</div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href='#top'>
        <div className={`nav-item ${activeSection === 'top' ? 'active' : ''}`} onClick={() => handleNavLinkClick('top')}>
          <RxPinTop/>
          <span className='nav-item-text'>Top</span>
        </div>
        </a>
        <a href='#about'>
          <div className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleNavLinkClick('about')}>
            <BsInfoCircleFill/>
            <span className='nav-item-text'>About Me</span>
          </div>
        </a>
        <a href='#skills'>
          <div className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleNavLinkClick('skills')}>
            <GiSkills/>
            <span className='nav-item-text'>Skills</span>
          </div>
        </a>
        <a href='#projects'>
          <div className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleNavLinkClick('projects')}>
            <AiFillProject/>
            <span className='nav-item-text'>Projects</span>
          </div>
        </a>
        <a href='#interests'>
          <div className={`nav-item ${activeSection === 'interests' ? 'active' : ''}`} onClick={() => handleNavLinkClick('interests')}>
            <AiFillHeart/>
            <span className='nav-item-text'>Interests</span>
          </div>
        </a>
        <a href='#contact'>
          <div className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleNavLinkClick('contact')}>
            <BsChatLeftTextFill/>
            <span className='nav-item-text'>Contact Me</span>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Nav;
