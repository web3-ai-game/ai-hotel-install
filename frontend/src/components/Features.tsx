import React, {useEffect, useRef, useState} from 'react';
import './Features.css';

const Features: React.FC = () => {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate cards one by one
                        const cards = entry.target.querySelectorAll('.feature-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => [...prev, index]);
                            }, index * 200);
                        });
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

    const features = [
        {
            icon: '🤖',
            title: 'AI Concierge',
            description: '24/7 personalized assistance powered by advanced artificial intelligence that learns your preferences.',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            stats: '99.9% Uptime'
        },
        {
            icon: '🏨',
            title: 'Smart Rooms',
            description: 'Intelligent room controls that adapt to your preferences automatically with IoT integration.',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            stats: '500+ Sensors'
        },
        {
            icon: '🍽️',
            title: 'Gourmet Dining',
            description: 'World-class cuisine crafted by Michelin-starred chefs using the finest organic ingredients.',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            stats: '3 Michelin Stars'
        },
        {
            icon: '🧘',
            title: 'Wellness Spa',
            description: 'Rejuvenate your mind and body with our state-of-the-art spa facilities and holistic treatments.',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            stats: '50+ Treatments'
        },
        {
            icon: '🌟',
            title: 'VIP Experience',
            description: 'Exclusive access to premium amenities, private lounges, and personalized butler service.',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            stats: 'Ultra Luxury'
        },
        {
            icon: '🚁',
            title: 'Helicopter Service',
            description: 'Private helicopter transfers and scenic tours available 24/7 for our premium guests.',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            stats: 'On Demand'
        }
    ];

    return (
        <section ref={sectionRef} className="features-section">
            <div className="features-background">
                <div className="features-gradient"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container">
                <div className="features-header">
                    <div className="section-badge">
                        <span className="badge-text">✨ Premium Features</span>
                    </div>
                    <h2 className="features-title">
                        Luxury Meets
                        <span className="title-highlight"> Innovation</span>
                    </h2>
                    <p className="features-subtitle">
                        Experience the perfect blend of cutting-edge technology and timeless hospitality.
                        Every detail is designed to exceed your expectations.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
                            style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}
                        >
                            <div className="card-glow" style={{background: feature.gradient}}></div>
                            <div className="card-content">
                                <div className="feature-header">
                                    <div className="feature-icon" style={{background: feature.gradient}}>
                                        <span className="icon-emoji">{feature.icon}</span>
                                    </div>
                                    <div className="feature-stats">
                                        <span className="stats-text">{feature.stats}</span>
                                    </div>
                                </div>

                                <div className="feature-body">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>

                                <div className="feature-footer">
                                    <button className="feature-btn">
                                        <span>Learn More</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="features-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">Ready to Experience Luxury?</h3>
                        <p className="cta-description">
                            Book your stay today and discover what makes AI Hotel the world's most innovative
                            hospitality experience.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-gold">
                                <span>Book Now</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="btn btn-secondary">
                                <span>View Gallery</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor"
                                          strokeWidth="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
                                    <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
