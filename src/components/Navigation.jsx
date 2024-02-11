import React from 'react';
import {Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    return (
        <nav>
            <ul>
                <li classname={location.pathname === '/about' ? 'active' : ''}>
                    <Link to='/about'>About Me</Link>
                </li>
                <li classname={location.pathname === '/projects' ? 'active' : ''}>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li classname={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to='/contact'>Contact Me</Link>
                </li>
                <li classname={location.pathname === '/resume' ? 'active' : ''}>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;