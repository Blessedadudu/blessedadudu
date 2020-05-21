import React from 'react';
import './project.css'

export default function Project() {
    return (
        <div>
            <section className="projectz section-padding" id="projectz">
                <div className="reverse-section-title_container">
                    <div className="reverse-section-title_icon">
                        <i className="fas fa-project-diagram"></i>
                    </div>
                    <div className="reverse-section-title_text">
                        <h1 className="reverse-section-title_name">projects</h1>
                        <h4 className="reverse-section-title_info">...A few outstanding projects i have worked on</h4>
                    </div>
                </div>
                <div className="flexbox-parent">
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Wealthbuddy</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Using react to build a fintech web app for saving and investing...</p><a href="https://wealthbuddy.netlify.com/" 
                            className="project_info-link" target="_blank" without rel="noopener noreferrer">
                            Click to View
                            </a>
                        </div>
                    </article>
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Google Clone</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Using Sass, React to build the landing app of the Google Gmail.         
                            </p>
                            <a href="https://googleclone-blessed.netlify.app/" target="_blank" without rel="noopener noreferrer"
                            className="project_info-link">
                            Click to View
                            </a>
                        </div>
                    </article>
                    {/* <!-- end of project --> */}
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Google Clone</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Using react to build beach resort web app where user can navigate through available rooms.       
                            </p>
                            <a href="https://googleclone-blessed.netlify.app/" target="_blank" without rel="noopener noreferrer"
                            className="project_info-link">
                            Click to View
                            </a>
                        </div>
                    </article>
                    {/* <!-- end of project --> */}
                    {/* <!-- project --> */}
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Facerecognition App</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text"> This is a fullstack web app in which front end user registers, 
                                sign in and post images in which the faces can be identified with the aid of a Face API.</p>
                            <a href="https://imagedetection.herokuapp.com" target="_blank" without rel="noopener noreferrer" className="project_info-link">Click to View</a>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}
