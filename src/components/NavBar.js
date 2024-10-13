
import React from 'react';
import './NavBar.css';
import logo from '../assets/images/circuit-earth-logo.png'; 

const NavBar = ({ setCurrentPage }) => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Circuit Earth Logo" />
            <div className="navbar-buttons" style={{ display: 'flex', gap: '10px' }}>
                <button className="navbar-button" style={{ backgroundColor: 'purple' }} onClick={() => setCurrentPage('home')}>Home</button>
                <button className="navbar-button" style={{ backgroundColor: 'purple' }} onClick={() => setCurrentPage('about')}>About</button>
                <button className="navbar-button" style={{ backgroundColor: 'purple' }} onClick={() => setCurrentPage('visualization')}>Visualizations</button>
            </div>
        </nav>
    );
};


export default NavBar;


