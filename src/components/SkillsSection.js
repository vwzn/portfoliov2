import React from 'react';
import '../styles/SkillsSection.css';
const SkillsSection = ({ darkMode }) => {
    return (
        <>
            <section className="skills" data-aos="fade-up">
                <h2 data-aos="zoom-out">My Skills</h2>
                <div className={`skill-grid ${darkMode ? 'dark-mode' : ''}`}>
                    {darkMode ? (
                        <>
                            <div className="skill-card" data-aos="fade-right">
                                <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark" alt="HTML5" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="100">
                                <img src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark" alt="CSS" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="200">
                                <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" alt="JavaScript" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="300">
                                <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" alt="TypeScript" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="400">
                                <img src="https://svgl-badge.vercel.app/api/Language/Java?theme=dark" alt="Java" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="500">
                                <img src="https://svgl-badge.vercel.app/api/Language/Php?theme=dark" alt="PHP" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="600">
                                <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" alt="React" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="700">
                                <img src="https://svgl-badge.vercel.app/api/Library/Node.js?theme=dark" alt="Node.js" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="800">
                                <img src="https://svgl-badge.vercel.app/api/Library/React%20Router?theme=dark" alt="React Router" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="900">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" alt="Next.js" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1000">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" alt="Tailwind CSS" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1100">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark" alt="Bootstrap" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1200">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" alt="Laravel" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1300">
                                <img src="https://svgl-badge.vercel.app/api/Database/MySQL?theme=dark" alt="MySQL" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1400">
                                <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=dark" alt="Git" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1500">
                                <img src="https://svgl-badge.vercel.app/api/Design/Figma?theme=dark" alt="Figma" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1600">
                                <img src="https://svgl-badge.vercel.app/api/Hosting/Vercel?theme=dark" alt="Vercel" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1700">
                                <img src="https://svgl-badge.vercel.app/api/Software/Stack%20Overflow?theme=dark" alt="Stack Overflow" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="skill-card" data-aos="fade-right">
                                <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=light" alt="HTML5" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="100">
                                <img src="https://svgl-badge.vercel.app/api/Language/CSS?theme=light" alt="CSS" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="200">
                                <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=light" alt="JavaScript" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="300">
                                <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=light" alt="TypeScript" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="400">
                                <img src="https://svgl-badge.vercel.app/api/Language/Java?theme=light" alt="Java" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="500">
                                <img src="https://svgl-badge.vercel.app/api/Language/Php?theme=light" alt="PHP" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="600">
                                <img src="https://svgl-badge.vercel.app/api/Library/React?theme=light" alt="React" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="700">
                                <img src="https://svgl-badge.vercel.app/api/Library/Node.js?theme=light" alt="Node.js" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="800">
                                <img src="https://svgl-badge.vercel.app/api/Library/React%20Router?theme=light" alt="React Router" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="900">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=light" alt="Next.js" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1000">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light" alt="Tailwind CSS" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1100">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=light" alt="Bootstrap" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1200">
                                <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=light" alt="Laravel" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1300">
                                <img src="https://svgl-badge.vercel.app/api/Database/MySQL?theme=light" alt="MySQL" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1400">
                                <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=light" alt="Git" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1500">
                                <img src="https://svgl-badge.vercel.app/api/Design/Figma?theme=light" alt="Figma" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1600">
                                <img src="https://svgl-badge.vercel.app/api/Hosting/Vercel?theme=light" alt="Vercel" />
                            </div>
                            <div className="skill-card" data-aos="fade-right" data-aos-delay="1700">
                                <img src="https://svgl-badge.vercel.app/api/Software/Stack%20Overflow?theme=light" alt="Stack Overflow" />
                            </div>
                        </>
                    )}
                </div>
                <div className="most-used-lang" data-aos="fade-up">
                    {darkMode ? (
                        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=vwzn&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=600" />
                    ) : (
                        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=vwzn&locale=en&layout=compact&theme=white&hide_border=true&bg_color=00000&card_width=600" />
                    )}
                </div>
            </section>
        </>
    );
};

export default SkillsSection;
