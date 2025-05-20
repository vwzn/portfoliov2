import React from 'react'
import { Gsv } from '../assets';
import { NextDashboard } from '../assets';
import { PortfolioV1 } from '../assets';
import { PortfolioV2 } from '../assets';
import '../styles/ProjectsSection.css';

const ProjectsSection = ({ darkMode }) => {
    return (
        <>
            <section className="projects" data-aos="fade-up">
                <h2>My Projects</h2>
                <div className="project-cards">
                    <div className="project-card" data-aos="fade-right" data-aos-delay="700">
                        <div className="project-title">
                            <h3>Portfolio v2</h3>
                        </div>
                        <div className="project-picture">
                            <img src={PortfolioV2} alt="Next Js Dashboard" />
                        </div>
                        <div className="project-subtitle">
                            <p>A personal portfolio website showcasing my skills and projects.</p>
                        </div>
                        <div className="technology">
                            <div className="title-tech">
                                <h3>Technology Used</h3>
                            </div>
                            <div className="icon-tech">
                                {darkMode ? (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark"
                                            alt="JavaScript"
                                            title="JavaScript Language"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Library/React?theme=dark"
                                            alt="React"
                                            title="React Framework"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark"
                                            alt="CSS"
                                            title="CSS Styling"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=light"
                                            alt="JavaScript"
                                            title="JavaScript Language"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Library/React?theme=light"
                                            alt="React"
                                            title="React Framework"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/CSS?theme=light"
                                            alt="CSS"
                                            title="CSS Styling"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="website-project">
                            <p>Website</p>
                            <a href="https://github-stats-app.vercel.app">github-stats-app.vercel.app</a>
                        </div>
                        <div className="github-project">
                            <p>Github</p>
                            <a href="https://github.com/vwzn/github-stats-app">github.com/vwzn/github-stats-app</a>
                        </div>
                    </div>
                    <div className="project-card" data-aos="fade-right" data-aos-delay="700">
                        <div className="project-title">
                            <h3>GitHub Stats Viewer</h3>
                        </div>
                        <div className="project-picture">
                            <img src={Gsv} alt="GitHub Stats Viewer" />
                        </div>
                        <div className="project-subtitle">
                            <p>A stunning GitHub statistics viewer with glassmorphism UI design.</p>
                        </div>
                        <div className="technology">
                            <div className="title-tech">
                                <h3>Technology Used</h3>
                            </div>
                            <div className="icon-tech">
                                {darkMode ? (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark"
                                            alt="TypeScript"
                                            title="TypeScript Language"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark"
                                            alt="Next.js"
                                            title="Next.js Framework"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark"
                                            alt="Tailwind CSS"
                                            title="Tailwind CSS Framework"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=light"
                                            alt="TypeScript"
                                            title="TypeScript Language"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=light"
                                            alt="Next.js"
                                            title="Next.js Framework"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light"
                                            alt="Tailwind CSS"
                                            title="Tailwind CSS Framework"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="website-project">
                            <p>Website</p>
                            <a href="https://github-stats-app.vercel.app">github-stats-app.vercel.app</a>
                        </div>
                        <div className="github-project">
                            <p>Github</p>
                            <a href="https://github.com/vwzn/github-stats-app">github.com/vwzn/github-stats-app</a>
                        </div>
                    </div>
                    <div className="project-card" data-aos="fade-right" data-aos-delay="700">
                        <div className="project-title">
                            <h3>Next Js Dashboard</h3>
                        </div>
                        <div className="project-picture">
                            <img src={NextDashboard} alt="Next Js Dashboard" />
                        </div>
                        <div className="project-subtitle">
                            <p>A simple dashboard using Next Js.</p>
                        </div>
                        <div className="technology">
                            <div className="title-tech">
                                <h3>Technology Used</h3>
                            </div>
                            <div className="icon-tech">
                                {darkMode ? (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark"
                                            alt="TypeScript Language Badge - Dark Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark"
                                            alt="JavaScript Language Badge - Dark Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark"
                                            alt="Next.js Framework Badge - Dark Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark"
                                            alt="Tailwind CSS Framework Badge - Dark Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Database/PostgreSQL?theme=dark"
                                            alt="PostgreSQL Database Badge - Dark Mode"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=light"
                                            alt="TypeScript Language Badge - Light Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=light"
                                            alt="JavaScript Language Badge - Light Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=light"
                                            alt="Next.js Framework Badge - Light Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light"
                                            alt="Tailwind CSS Framework Badge - Light Mode"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Database/PostgreSQL?theme=light"
                                            alt="PostgreSQL Database Badge - Light Mode"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="website-project">
                            <p>Website</p>
                            <a href="https://vwzn-dashboard.vercel.app">vwzn-dashboard.vercel.app</a>
                        </div>
                        <div className="github-project">
                            <p>Github</p>
                            <a href="https://github.com/vwzn/nextjs-dashboard">github.com/vwzn/nextjs-dashboard</a>
                        </div>
                    </div>
                    <div className="project-card" data-aos="fade-right" data-aos-delay="700">
                        <div className="project-title">
                            <h3>Portfolio v1</h3>
                        </div>
                        <div className="project-picture">
                            <img src={PortfolioV1} alt="Portfolio v1" />
                        </div>
                        <div className="project-subtitle">
                            <p>A personal portfolio website showcasing my skills and projects.</p>
                        </div>
                        <div className="technology">
                            <div className="title-tech">
                                <h3>Technology Used</h3>
                            </div>
                            <div className="icon-tech">
                                {darkMode ? (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark"
                                            alt="HTML5"
                                            title="HTML5 Markup Language"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark"
                                            alt="CSS"
                                            title="CSS Stylesheets"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark"
                                            alt="Tailwind CSS"
                                            title="Tailwind CSS Framework"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=light"
                                            alt="HTML5"
                                            title="HTML5 Markup Language"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Language/CSS?theme=light"
                                            alt="CSS"
                                            title="CSS Stylesheets"
                                        />
                                        <img
                                            src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light"
                                            alt="Tailwind CSS"
                                            title="Tailwind CSS Framework"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="website-project">
                            <p>Website</p>
                            <a href="https://ahmad-fauzan.vercel.app">ahmad-fauzan.vercel.app</a>
                        </div>
                        <div className="github-project">
                            <p>Github</p>
                            <a href="https://github.com/vwzn/portolio">github.com/vwzn/portolio</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsSection
