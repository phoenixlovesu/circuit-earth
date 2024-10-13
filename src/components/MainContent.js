
import React from 'react';

const MainContent = ({ setCurrentPage }) => {
    return (
        <div className="main-content">
            <h1 style={{ textAlign: 'center' }}><strong>Welcome to Circuit Earth</strong></h1>
            <h2 style={{ textAlign: 'center' }}>Addressing Environmental and Social Issues</h2>
            <button className="learn-more-button" onClick={() => setCurrentPage('about')}>
                Learn More
            </button>
        </div>
    );
};

export default MainContent;
