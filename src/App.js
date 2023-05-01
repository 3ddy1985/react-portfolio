import React, { useState, useLayoutEffect, useRef, lazy, useEffect } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Projects = lazy(() => import('./components/project/Projects'));
const Interests = lazy(() => import('./components/interests/Interests'));
const Contact = lazy(() => import('./components/contact/Contact'));

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const interestsRef = useRef();
  const contactRef = useRef();

  // Simulate the loading time
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7100);
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const aboutOffset = aboutRef.current?.offsetTop - window.innerHeight / 2;
      const skillsOffset = skillsRef.current?.offsetTop - window.innerHeight / 2;
      const projectsOffset = projectsRef.current?.offsetTop - window.innerHeight / 2;
      const interestsOffset = interestsRef.current?.offsetTop - window.innerHeight / 2;
      const contactOffset = contactRef.current?.offsetTop - window.innerHeight / 2;

      if (window.pageYOffset >= aboutOffset && window.pageYOffset < skillsOffset) {
        setActiveSection('about');
        setShowNav(true);
      } else if (window.pageYOffset >= skillsOffset && window.pageYOffset < projectsOffset) {
        setActiveSection('skills');
        setShowNav(true);
      } else if (window.pageYOffset >= projectsOffset && window.pageYOffset < interestsOffset) {
        setActiveSection('projects');
        setShowNav(true);
      } else if (window.pageYOffset >= interestsOffset && window.pageYOffset < contactOffset) {
        setActiveSection('interests');
        setShowNav(true);
      } else if (window.pageYOffset >= contactOffset) {
        setActiveSection('contact');
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aboutRef, skillsRef, projectsRef, interestsRef, contactRef]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Nav showNav={showNav} activeSection={activeSection} setActiveSection={setActiveSection} />
          <Header />
          <About ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Interests ref={interestsRef} />
          <Contact ref={contactRef} />
        </>
      )}
    </>
  );
}
