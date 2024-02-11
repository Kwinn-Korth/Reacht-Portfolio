import React from 'react';
//import photos of projects

function Project() {
    // need to bring in project stuff
    const projects = [];
    return (
        <div className='project-container'>
            <h2>Projects</h2>
            <div className='projects'>
                {projects.map((project, index) => (
                    <div key={index} className='project'>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <div className='project-links'>
                            <a href={project.github} target='_blank' rel='noopener noreferrer'>
                                Github Repository
                            </a>
                            <a href={project.deployed} target='_blank' rel='noopener noreferrer'>
                                Deployed Application
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                );
            }

export default Project;