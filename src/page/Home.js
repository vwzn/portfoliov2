import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { Helmet } from 'react-helmet';

import AOS from 'aos';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';

// icon-material
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

//components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';


function Home() {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className={darkMode ? 'app dark-mode' : 'app'}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <header className="header">
                <button className="toggle-button" onClick={toggleDarkMode}>
                    {darkMode ? <WbSunnyIcon /> : < NightsStayIcon />}
                </button>
            </header>
            <HeroSection />
            <AboutSection />
            <SkillsSection darkMode={darkMode} isLightMode={!darkMode} />
            <ServicesSection />
            <ProjectsSection darkMode={darkMode} isLightMode={!darkMode} />
            <div className="container-arrow">
                <Link to="home" smooth={true} duration={500} className="arrow-up"><ArrowUpwardSharpIcon /></Link>
            </div>
            <ContactSection />
        </div>
    );
}

export default Home;
