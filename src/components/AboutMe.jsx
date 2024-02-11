import React from 'react';
// import myPhoto from '../images/myPhoto.jpg'
import profilePic from '../Images/profilePic.png'

// also need to add the image to the public folder and then import it here
function About() {
    return (
        <div className = "aboutme-container">
            <h2>About Me!</h2>
            <p>
                Hi, my name is Kwinn Korth and I am working to become a full stack web developer. I am currently enrolled at EdX coding bootcamp at the University of Utah learning full stack web development.
                I am a hardworking, dedicated, and passionate individual who is always looking for ways to improve and learn new things. I am a quick learner and I am always willing to take on new challenges.
                I'm excited to see where this journey takes me and I am looking forward to the opportunities that will come my way. I knew nothing about coding before I started this bootcamp and I am excited 
                to see where I will be in a few months after I have graduated. My favorite part of coding is the problem solving aspect of it. I love the feeling of finally figuring out a problem that I have been
                working on for hours, and trust me, I have had more than my fair share of those moments. One of the things that I have come to know about coding is that it is 25% writing code and 75% debugging.
                I genuinly do enjoy all of the aspects of coding, even the debugging. I am excited to see where this journey takes me and I am looking forward to the opportunities that will come my way.
            </p>
            <div className='image-container'>
                <img src={profilePic} alt="profilePic" className="profilePic" />
            </div>
        </div>
    );
} 

export default About;