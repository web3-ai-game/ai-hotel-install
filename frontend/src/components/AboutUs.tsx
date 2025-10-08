import React, {useEffect, useRef, useState} from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {threshold: 0.2}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="about-us-section">
            <div className="about-background">
                <div className="about-gradient"></div>
                <div className="geometric-shapes">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <div className="shape-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="about-content">
                    <div className={`about-text ${isVisible ? 'animate-fade-in-left' : ''}`}>
                        <div className="section-badge">
                            <span className="badge-text">🏨 Our Story</span>
                        </div>

                        <h2 className="about-title">
                            Redefining
                            <span className="title-highlight"> Hospitality </span>
                            Through Innovation
                        </h2>

                        <p className="about-description">
                            Founded in 2023, AI Hotel represents the pinnacle of luxury hospitality
                            enhanced by cutting-edge artificial intelligence. We don't just provide
                            accommodation; we craft experiences that anticipate your every need.
                        </p>

                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="feature-content">
                                    <h3>AI-Powered Intelligence</h3>
                                    <p>Advanced machine learning algorithms that learn and adapt to your preferences</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                                              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="feature-content">
                                    <h3>Human-Centered Service</h3>
                                    <p>Technology enhances, never replaces, the warmth of genuine human hospitality</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="currentColor" strokeWidth="2"/>
                                        <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="feature-content">
                                    <h3>Sustainable Luxury</h3>
                                    <p>Committed to environmental responsibility without compromising on luxury</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-cta">
                            <button className="btn btn-primary">
                                <span>Discover Our Story</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`about-visual ${isVisible ? 'animate-fade-in-right' : ''}`}>
                        <div className="visual-container">
                            <div className="main-image">
                                <div className="image-glow"></div>
                                <div className="image-content">
                                    <div className="hotel-facade">
                                        <div className="building-layer building-1"></div>
                                        <div className="building-layer building-2"></div>
                                        <div className="building-layer building-3"></div>
                                    </div>
                                    <div className="floating-elements">
                                        <div className="floating-icon floating-icon-1">🤖</div>
                                        <div className="floating-icon floating-icon-2">✨</div>
                                        <div className="floating-icon floating-icon-3">🏨</div>
                                    </div>
                                </div>
                            </div>

                            <div className="stats-overlay">
                                <div className="stat-card">
                                    <div className="stat-number">2023</div>
                                    <div className="stat-label">Founded</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Countries</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">24/7</div>
                                    <div className="stat-label">AI Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
