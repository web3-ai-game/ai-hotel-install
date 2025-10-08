import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Hero />
            <Features />
            <AboutUs />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
