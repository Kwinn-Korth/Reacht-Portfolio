import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return (
        <div className='header-container'>
            <header>
                <h1>
                    <Link to='/'>My Portfolio</Link>
                </h1>
                <nav>
                    <Navigation />
                </nav>
            </header>
        </div>
    );
}

export default Header;