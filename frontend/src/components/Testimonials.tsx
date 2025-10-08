import React, {useEffect, useRef, useState} from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const testimonials = [
        {
            text: "AI Hotel redefined luxury for me. The AI concierge anticipated my every need, and the smart room technology was simply magical. This is the future of hospitality.",
            author: "Sarah Chen",
            role: "Tech Executive",
            rating: 5,
            image: "👩‍💼"
        },
        {
            text: "From the moment I arrived, I felt like royalty. The personalized service, exquisite dining, and innovative technology created an unforgettable experience.",
            author: "Marcus Rodriguez",
            role: "Travel Blogger",
            rating: 5,
            image: "👨‍💻"
        },
        {
            text: "The attention to detail is extraordinary. Every aspect of my stay was perfectly orchestrated by AI, yet it felt incredibly human and warm. Absolutely phenomenal.",
            author: "Dr. Emily Watson",
            role: "Medical Professional",
            rating: 5,
            image: "👩‍⚕️"
        },
        {
            text: "I've stayed at luxury hotels worldwide, but AI Hotel is in a league of its own. The seamless integration of technology and hospitality is revolutionary.",
            author: "James Thompson",
            role: "Business Owner",
            rating: 5,
            image: "👨‍💼"
        }
    ];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section ref={sectionRef} className="testimonials-section">
            <div className="testimonials-background">
                <div className="testimonials-gradient"></div>
                <div className="floating-quotes">
                    <div className="quote quote-1">"</div>
                    <div className="quote quote-2">"</div>
                    <div className="quote quote-3">"</div>
                </div>
            </div>

            <div className="container">
                <div className={`testimonials-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <div className="section-badge">
                        <span className="badge-text">💬 Guest Reviews</span>
                    </div>
                    <h2 className="testimonials-title">
                        What Our
                        <span className="title-highlight"> Guests </span>
                        Say
                    </h2>
                    <p className="testimonials-subtitle">
                        Discover why travelers from around the world choose AI Hotel for their most important stays.
                    </p>
                </div>

                <div className={`testimonials-carousel ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <div className="carousel-container">
                        <div
                            className="testimonials-track"
                            style={{transform: `translateX(-${currentSlide * 100}%)`}}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-slide">
                                    <div className="testimonial-card">
                                        <div className="card-glow"></div>
                                        <div className="testimonial-content">
                                            <div className="quote-icon">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>

                                            <div className="rating">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <span key={i} className="star">⭐</span>
                                                ))}
                                            </div>

                                            <p className="testimonial-text">
                                                {testimonial.text}
                                            </p>

                                            <div className="testimonial-author">
                                                <div className="author-avatar">
                                                    <span className="avatar-emoji">{testimonial.image}</span>
                                                </div>
                                                <div className="author-info">
                                                    <h4 className="author-name">{testimonial.author}</h4>
                                                    <p className="author-role">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-btn prev-btn" onClick={prevSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className="carousel-btn next-btn" onClick={nextSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="carousel-indicators">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className={`testimonials-stats ${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <div className="stat-item">
                        <div className="stat-number">4.9</div>
                        <div className="stat-label">Average Rating</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">10K+</div>
                        <div className="stat-label">Happy Guests</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Return Rate</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Countries</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
