import React, { useState } from 'react';
import './scss/App.scss';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/project/Projects';
import Interests from './components/interests/Interests';
import Contact from './components/contact/Contact';

export default function App() {

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
    </>
  );
}


