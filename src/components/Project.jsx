import React from 'react';
//import photos of projects
import dayPlanner from '../Images/dayPlanner.png';
import getErDone from '../Images/getErDone.png';
import hype from '../Images/hype.png';
import comingSoon from '../Images/comingSoon.png';
import regexTutorial from '../Images/regexTutorial.png';

function Project() {
    // need to bring in project stuff
    const projects = [
        {
            name: 'Day Planner',
            image: dayPlanner,
            github: 'https://github.com/Kwinn-Korth/Day-Planner',
            deployed: 'https://kwinn-korth.github.io/Day-Planner/'
        },
        {
            name: 'Get Er Done',
            image: getErDone,
            github: 'https://github.com/haleybrokaw/Get-Er-Done',
            deployed: 'https://haleybrokaw.github.io/Get-Er-Done/'
        },
        {
            name: 'Hype',
            image: hype,
            github: 'https://github.com/G-marshall1/Hype',
            deployed: 'https://g-marshall1.github.io/Hype/'
        },
        {
            name: 'Side Quest',
            image: comingSoon,
            github: 'https://github.com/Jakefred6/side-quest',
            deployed: 'coming soon'
        },
        {
            name: 'Regex Tutorial',
            image: regexTutorial,
            github: 'https://gist.github.com/Kwinn-Korth/59aa6aba2dfa8a2f4e27d18291147a8b',
            deployed: 'https://gist.github.com/Kwinn-Korth/59aa6aba2dfa8a2f4e27d18291147a8b'
        }

    ];
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