import React from 'react'
import { NextDashboard } from '../assets';
import { PortfolioV1 } from '../assets';
import '../styles/ProjectsSection.css';

const ProjectsSection = ({ darkMode }) => {
    return (
        <>
            <section className="projects" data-aos="fade-up">
                <h2>My Projects</h2>
                <div className="project-cards">
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
                                        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
                                        <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" />
                                        <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
                                        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
                                        <img src="https://svgl-badge.vercel.app/api/Database/PostgreSQL?theme=dark" />
                                    </>
                                ) : (
                                    <>
                                        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=light" />
                                        <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=light" />
                                        <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=light" />
                                        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light" />
                                        <img src="https://svgl-badge.vercel.app/api/Database/PostgreSQL?theme=light" />
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
                                        <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark" />
                                        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
                                    </>
                                ) : (
                                    <>
                                        <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=light" />
                                        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=light" />
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
