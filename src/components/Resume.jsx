import React from 'react';
import comingSoon from '../Images/comingSoon.png'

// Needs to be updated with resume information and link and possibly a photo
const Resume = () => {
    return (
        <div className='resume-container'>
            <h2>Resume</h2>
            <p>
                A link to my resume is coming soon!
            </p>
            <img src={comingSoon} alt="comingSoon" className="comingSoon" />
        </div>
    );
}

export default Resume;