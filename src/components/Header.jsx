import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return (
        <div className='header-container'>
            <header>
                <h1>
                    My Portfolio
                </h1>
                <nav>
                    <Navigation />
                </nav>
            </header>
        </div>
    );
}

export default Header;