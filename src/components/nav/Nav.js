import React from 'react';
import './nav.scss';
import { RxPinTop } from 'react-icons/rx';
import { BsInfoCircleFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { AiFillProject } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
  return (
    <nav>
      <a href='#top'>
      <div class='nav-item'>
        <RxPinTop/>
        <span class='nav-item-text'>Top</span>
      </div>
      </a>
      <a href='#about'>
        <div className='nav-item active'>
          <BsInfoCircleFill/>
          <span className='nav-item-text'>About Me</span>
        </div>
      </a>
      <a href='#skills'>
        <div className='nav-item'>
          <GiSkills/>
          <span className='nav-item-text'>Skills</span>
        </div>
      </a>
      <a href='#projects'>
        <div className='nav-item'>
          <AiFillProject/>
          <span className='nav-item-text'>Projects</span>
        </div>
      </a>
      <a href='#interests'>
        <div className='nav-item'>
          <AiFillHeart/>
          <span className='nav-item-text'>Interests</span>
        </div>
      </a>
      <a href='#contact'>
        <div className='nav-item'>
          <BsChatLeftTextFill/>
          <span className='nav-item-text'>Contact Me</span>
        </div>
      </a>
    </nav>
  )
}

export default Nav