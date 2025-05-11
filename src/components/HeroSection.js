import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';
import { Me } from '../assets';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <>
            <section className="hero" data-aos="fade-up" id="home">
                <div className="hero-content">
                    <img src={Me} alt="Profile" className="profile-picture" />
                    <h1 className="name">Ahmad Fauzan Abdurrohman</h1>
                    <p className="hero-description">
                        <ReactTypingEffect
                            text={['JavaScript Developer', 'Frontend Web Developer', '']}
                            speed={200}
                            eraseDelay={1000}
                            typingDelay={200}
                        /></p>
                    <Link to="contact" smooth={true} duration={500} className="hero-button">Contact</Link>
                </div>
            </section>
        </>
    )
}

export default HeroSection
