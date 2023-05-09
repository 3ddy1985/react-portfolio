import React, {forwardRef, useEffect, useRef, useState} from 'react';
import './projects.scss';
import Tic1 from'../../assets/project_images/tictac2.png';
import Tic2 from'../../assets/project_images/tictac3.png';
import Tic3 from'../../assets/project_images/tictac4.png';
import Tic4 from'../../assets/project_images/tictac5.png';
import Recipe1 from'../../assets/project_images/recipe1.png';
import Recipe2 from'../../assets/project_images/recipe2.png';
import Recipe3 from'../../assets/project_images/recipe3.png';
import Recipe4 from'../../assets/project_images/recipe5.png';
import Social1 from'../../assets/project_images/social1.png';
import Social2 from'../../assets/project_images/social2.png';
import Social3 from'../../assets/project_images/social3.png';
import Social4 from'../../assets/project_images/social4.png';
import Code1 from'../../assets/project_images/code1.png';
import Code2 from'../../assets/project_images/code2.png';
import Code3 from'../../assets/project_images/code3.png';
import Code4 from'../../assets/project_images/code4.png';


const Projects = forwardRef((props, ref) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const projectsData = [
        {
            name: "Tic Tac Toe",
            description: "This is a simple Tic Tac Toe game built with HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces on a 3x3 grid with their respective symbols (X or O). The objective of the game is for a player to get three of their symbols in a row (horizontally, vertically, or diagonally) before their opponent does.",
            images: [Tic1, Tic2, Tic3, Tic4],
            liveLink: 'https://3ddy1985.github.io/tic-tac-toe/',
            readMe1: 'https://github.com/3ddy1985/tic-tac-toe',
            readMe2: ''
        }, {
            name: "Recipe App",
            description: " This project is a web application that allows users to search for and save recipes. It was completed as part of a frontend web development course and utilizes technologies such as React and Axios to interact with a 3rd party API to fetch recipe data.",
            images: [Recipe1, Recipe2, Recipe3, Recipe4],
            liveLink: 'https://aesthetic-longma-3833b0.netlify.app/',
            readMe1: 'https://github.com/3ddy1985/recipe-app',
            readMe2: ''
        }, {
            name: "Social Media App",
            description: "This project was completed as part of a team project during a software engineering course. The project is a backend server application that is built with Node.js and Express.js and uses MongoDB and Mongoose for database storage. The goal of the project is to provide a social platform for users to create and manage their posts and connect with friends.",
            images: [Social1, Social2, Social3, Social4],
            liveLink: 'https://stellar-pavlova-831e00.netlify.app/',
            readMe1: 'https://github.com/3ddy1985/project3-frontend',
            readMe2: 'https://github.com/3ddy1985/project3-backend'
        }, {
            name: "Dev Helper",
            description: "CodeBase is a social platform for coders to share, learn and connect with other coders. The app is built using Ruby on Rails and uses a PostgreSQL database. The app allows users to sign up, create a profile, add code snippets to their profile, post questions, and engage in conversations.",
            images: [Code1, Code2, Code3, Code4],
            liveLink: 'https://infinite-garden-21771.herokuapp.com/',
            readMe1: 'https://github.com/3ddy1985/codebase',
            readMe2: ''
        },
    ];

    const cardMouseEnter = (e) => {
        const card = e.currentTarget;
        card.querySelector('.face.face1').style.transform = 'translateY(0)';
        card.querySelector('.face.face1 h3').style.color = 'var(--text-secondary)';
        card.querySelector('.face.face2').style.transform = 'translateY(0)';
        card.querySelector('.face.face2').style.height = '300px';
        card.querySelector('.face.face2').style.opacity = '1';
        card.querySelector('.face.face2').style.zIndex = '2';
    };

    const cardMouseLeave = (e) => {
        const card = e.currentTarget;
        card.querySelector('.face.face1').style.transform = 'translateY(100px)';
        card.querySelector('.face.face1 h3').style.color = 'var(--primary-color)';
        card.querySelector('.face.face2').style.transform = 'translateY(-100px)';
        card.querySelector('.face.face2').style.height = '200px';
        card.querySelector('.face.face2').style.opacity = '0';
        card.querySelector('.face.face2').style.zIndex = '0';
    };

    const handleLearnMoreClick = (event, project) => {
        event.preventDefault();
        console.log('Learn more clicked');
        setSelectedProject(project);
        setPopupOpen(true);
        setSlideIndex(0);
        console.log(popupOpen);
    };

    useEffect(() => {
        if (popupOpen) {
            const interval = setInterval(() => {
                setSlideIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
            }, 3000); // Change this value to adjust the time between slides
            return() => clearInterval(interval);
        }
    }, [popupOpen, selectedProject]);


    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <section ref={ref}
            id='projects'>
            <h2>Check Out My Projects</h2>
            <div className='container'>
                {
                projectsData.map((project, index) => (
                    <div className="card"
                        onMouseEnter={cardMouseEnter}
                        onMouseLeave={cardMouseLeave}
                        key={index}>
                        <div className="face face1">
                            <h3>{
                                project.name
                            }</h3>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>{
                                    project.description
                                }</p>
                                <a href="#"
                                    onClick={
                                        (event) => handleLearnMoreClick(event, project)
                                }>Learn more</a>
                            </div>
                        </div>
                    </div>
                ))
            } </div>

            {
            popupOpen && selectedProject && (
                <div className="project-overlay">
                    <div className="project-popup">
                        {
                        console.log('Rendering popup')
                    }   
                        <button className='outer' onClick={closePopup}>
                          <div className='inner'>
                            <label>Close</label>
                          </div>
                        </button>
                        <h3>{
                            selectedProject.name
                        }</h3>
                        {/* Add slideshow */}
                        <div className="slideshow">
                            {
                            selectedProject.images.map((image, index) => (
                                <img key={index}
                                    src={image}
                                    alt={
                                        `${
                                            selectedProject.name
                                        } slide ${
                                            index + 1
                                        }`
                                    }
                                    style={
                                        {
                                            display: index === slideIndex ? 'block' : 'none'
                                        }
                                    }/>
                            ))
                        } </div>
                        {/* Add conditional links */}
                        <div className="links">
                            {
                            selectedProject.liveLink && <a href={
                                selectedProject.liveLink
                            } target='_blank'>Live Link</a>
                        }
                            {
                            selectedProject.readMe1 && <a href={
                                selectedProject.readMe1
                            } target='_blank'>ReadMe1</a>
                        }
                            {
                            selectedProject.readMe2 && <a href={
                                selectedProject.readMe2
                            } target='_blank'>ReadMe2</a>
                        } </div>
                    </div>
                </div>
            )
        } </section>
    )
});

export default Projects
