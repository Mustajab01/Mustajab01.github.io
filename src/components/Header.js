import React, { useState } from 'react';

const Header = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };
    return (
        <header>
            <div className="header-content">
                <div className="name-container">
                    <span className="menu-icon" onClick={toggleNavLinks}>&#9776;</span>
                    <h1>Mustajab Ali</h1>
                </div>
                <nav className={`nav-links ${showNavLinks ? 'show' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>   
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
