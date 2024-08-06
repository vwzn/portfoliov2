import React from 'react'
import '../styles/ContactSection.css';

const ContactSection = () => {
    return (
        <>
            <section className="contact-section" data-aos="fade-up" id="contact">
                <div className="contact-container">
                    <div className="contact-grid">
                        {/* WhatsApp */}
                        <div className="contact-item">
                            <div className="contact-link-wrapper">
                                <a href="https://wa.me/6281224013286" target="_blank" className="contact-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" className="icon" stroke="currentColor" fill="currentColor" strokeWidth="0" aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* Instagram */}
                        <div class="contact-item">
                            <div class="contact-link-wrapper">
                                <a href="https://www.instagram.com/_vwzn_" target="_blank" class="contact-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" aria-hidden="true" focusable="false" viewBox="0 0 1024 1024">
                                        <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* LinkedIn */}
                        <div className="contact-item">
                            <div className="contact-link-wrapper">
                                <a href="https://www.linkedin.com/in/ahmad-fauzan-abdurrohman-440996269" target="_blank" className="contact-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" className="icon" stroke="currentColor" fill="currentColor" strokeWidth="0" aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                                        <path d="M100.28 448H7.4V148.9h92.88zm-46.14-350C24.1 98 0 73.9 0 42.8A42.66 42.66 0 0 1 53.34 0C82.5 0 107 24.7 107 56.7c0 31.3-24.5 56.3-52.8 56.3zm394.2 350h-92.68V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8v148.2h-92.68V148.9H256v40.8h1.3c12.8-24.2 44.1-48.4 90.8-48.4 97.2 0 115.1 64 115.1 147.1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* GitHub */}
                        <div className="contact-item">
                            <div className="contact-link-wrapper">
                                <a href="https://github.com/vwzn" target="_blank" className="contact-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" className="icon" stroke="currentColor" fill="currentColor" strokeWidth="0" aria-hidden="true" focusable="false" viewBox="0 0 1024 1024">
                                        <path d="M511.6 76C265.1 76 64 277.3 64 524c0 198.3 126.8 366.7 303.1 425.9 22.1 4.1 30.2-9.6 30.2-21.4 0-10.5-.4-45.2-.7-82.1-123.2 22.6-149.2-53.4-149.2-53.4-20.1-50.7-49.1-64.2-49.1-64.2-40.1-27.4 3-26.8 3-26.8 44.3 3.1 67.6 45.5 67.6 45.5 39.4 67.4 103.4 47.9 128.7 36.6 4-28.5 15.4-47.9 28-58.9-98.3-11.2-201.6-49.1-201.6-218.5 0-48.3 17.3-87.7 45.5-118.6-4.5-11.2-19.7-56.6 4.3-118 0 0 37.1-11.9 121.5 45.3 35.2-9.8 72.9-14.7 110.5-14.9 37.6.2 75.3 5.1 110.5 14.9 84.3-57.2 121.3-45.3 121.3-45.3 24.1 61.4 8.9 106.8 4.4 118 28.3 30.9 45.3 70.3 45.3 118.6 0 169.9-103.6 207.2-202.3 218.1 15.9 13.7 30.1 41.1 30.1 82.9 0 59.9-.6 108.3-.6 123.1 0 11.9 8 25.9 30.2 21.4C833.3 890.3 960 721.8 960 524 960 277.3 758.9 76 512.4 76z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="footer">&copy; 2024 Ahmad Fauzan Abdurrohman. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default ContactSection
