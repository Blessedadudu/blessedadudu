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
                            <p className="project_info-text">Using react to build a fintech web app for saving and investing...</p><a href="https://cor-mywealth-project.herokuapp.com/" 
                            className="project_info-link" target="_blank">
                            Click to View
                            </a>
                        </div>
                    </article>
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Flexisaver</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Frontendfor the brand, Flexisaver.          
                            </p>
                            <a href="http://flexisaver.com.ng" target="_blank" 
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
                            <a href="https://imagedetection.herokuapp.com" target="_blank" className="project_info-link">Click to View</a>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}
