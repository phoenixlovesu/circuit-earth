import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'; 
import MainContent from './components/MainContent';
import Visualization from './pages/Visualization'; 
import About from './components/About';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <MainContent setCurrentPage={setCurrentPage} />; // Home will be MainContent
            case 'about':
                return <div><About />; </div>; // You can replace this with an About component later
            case 'visualization':
                return <Visualization />; // Renders Visualization component
            default:
                return <MainContent setCurrentPage={setCurrentPage}/>;
        }
    };

    return (
        <div>
            <NavBar setCurrentPage={setCurrentPage} /> {/* Passes setCurrentPage to NavBar */}
            {renderPage()}
        </div>
    );
};

export default App;
