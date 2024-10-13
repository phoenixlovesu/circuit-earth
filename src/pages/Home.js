// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <main>
                <h1>Welcome to Circuit Earth</h1>
                <p>Our mission is to address pressing environmental and social issues...</p>
                <a href="#about">Learn More</a>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
