import React, {
    useState,
    useLayoutEffect,
    useRef,
    lazy,
    useEffect,
    useCallback
} from 'react';
import Color_mode from './components/color_mode/Color_mode';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
const About = lazy(() => import ('./components/about/About'));
const Skills = lazy(() => import ('./components/skills/Skills'));
const Projects = lazy(() => import ('./components/project/Projects'));
const Interests = lazy(() => import ('./components/interests/Interests'));
const Contact = lazy(() => import ('./components/contact/Contact'));

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const [showNav, setShowNav] = useState(false);
    const [loading, setLoading] = useState(true);
    const [colorMode, setColorMode] = useState(() => {
        const storedColorMode = localStorage.getItem('colorMode');
        return storedColorMode ? storedColorMode : 'dark';
    });

    const aboutRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const interestsRef = useRef();
    const contactRef = useRef();

    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;
        return() => {
            const later = () => {
                timeout = null;
                if (!immediate) 
                    func.apply(this, arguments);
                

            };
            const callNow = immediate && ! timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) 
                func.apply(this, arguments);
            

        };
    };

    // Simulate the loading time
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7100);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("light-mode", colorMode === "light");
        localStorage.setItem('colorMode', colorMode);
    }, [colorMode]);

    const handleScroll = useCallback(() => {
        const aboutOffset = aboutRef.current ?. offsetTop - window.innerHeight / 2;
        const skillsOffset = skillsRef.current ?. offsetTop - window.innerHeight / 2;
        const projectsOffset = projectsRef.current ?. offsetTop - window.innerHeight / 2;
        const interestsOffset = interestsRef.current ?. offsetTop - window.innerHeight / 2;
        const contactOffset = contactRef.current ?. offsetTop - window.innerHeight / 2;

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
    }, [
        aboutRef,
        skillsRef,
        projectsRef,
        interestsRef,
        contactRef
    ]);

    useLayoutEffect(() => {
        const debouncedHandleScroll = debounce(handleScroll);

        window.addEventListener('scroll', debouncedHandleScroll);
        return() => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [handleScroll]);


    return (
        <> {
            loading ? (
                <Loading colorMode={colorMode}/>
            ) : (
                <>
                    <Color_mode colorMode={colorMode}
                        onColorModeChange={setColorMode}/>
                    <Nav showNav={showNav}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}/>
                    <Header colorMode={colorMode}/>
                    <About ref={aboutRef}/>
                    <Skills ref={skillsRef}/>
                    <Projects ref={projectsRef}/>
                    <Interests ref={interestsRef}/>
                    <Contact ref={contactRef}/>
                </>
            )
        } </>
    );
}
