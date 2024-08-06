import React from 'react'
import '../styles/ServicesSection.css';
const ServicesSection = () => {
    return (
        <>
            <section className="services" data-aos="fade-up">
                <h2>My Services</h2>
                <div className="service-cards">
                    <div className="service-card" data-aos="fade-right">
                        <h3>Frontend Web Development</h3>
                        <p>Creating responsive and engaging user interfaces using JavaScript and TypeScript.</p>
                    </div>
                    <div className="service-card" data-aos="fade-right" data-aos-delay="100">
                        <h3>JavaScript Web Development</h3>
                        <p>Building dynamic and interactive web applications with a focus on JavaScript.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesSection
