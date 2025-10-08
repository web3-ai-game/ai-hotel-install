import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="hero-section">
            {/* Animated Background */}
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="floating-elements">
                    <div className="floating-element floating-element-1"></div>
                    <div className="floating-element floating-element-2"></div>
                    <div className="floating-element floating-element-3"></div>
                    <div className="floating-element floating-element-4"></div>
                    <div className="floating-element floating-element-5"></div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="hero-nav">
                <div className="container">
                    <div className="nav-content">
                        <div className="logo">
                            <span className="logo-text">AI Hotel</span>
                            <span className="logo-accent">✨</span>
                        </div>
                        <div className="nav-links">
                            <Link to="/rooms" className="nav-link">Rooms</Link>
                            <Link to="/services" className="nav-link">Services</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="hero-content">
                <div className="container">
                    <div className={`hero-text ${isVisible ? 'animate-fade-in-up' : ''}`}>
                        <div className="hero-badge">
                            <span className="badge-text">🚀 The Future of Hospitality</span>
                        </div>

                        <h1 className="hero-title">
                            Experience
                            <span className="title-highlight"> Luxury </span>
                            Redefined
                        </h1>

                        <p className="hero-subtitle">
                            Welcome to AI Hotel, where cutting-edge artificial intelligence meets
                            world-class hospitality. Every moment is crafted to perfection,
                            every need anticipated before you even know it.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Luxury Suites</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">AI Concierge</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Guest Satisfaction</div>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <Link to="/rooms" className="btn btn-primary">
                                <span>Book Your Stay</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <Link to="/virtual-tour" className="btn btn-secondary">
                                <span>Virtual Tour</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className={`hero-visual ${isVisible ? 'animate-fade-in-right' : ''}`}>
                        <div className="hero-card">
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="card-avatar">
                                        <div className="avatar-gradient"></div>
                                        <span className="avatar-text">AI</span>
                                    </div>
                                    <div className="card-info">
                                        <h3>Your AI Assistant</h3>
                                        <p>Ready to serve you</p>
                                    </div>
                                    <div className="status-indicator">
                                        <div className="status-dot"></div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="message-bubble">
                                        <p>Welcome! I've prepared your favorite room with the perfect temperature and
                                            lighting. Would you like me to arrange dinner reservations?</p>
                                    </div>
                                    <div className="typing-indicator">
                                        <div className="typing-dot"></div>
                                        <div className="typing-dot"></div>
                                        <div className="typing-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-text">Discover More</div>
                <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
