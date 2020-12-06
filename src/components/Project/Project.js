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
                        <h1 className="reverse-section-title_name">Recent projects</h1>
                        <h4 className="reverse-section-title_info">...A few recent projects I worked on</h4>
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
                            <h1 className="project_info-title">Canaan Towers Frontend</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Using Vue to build an optimized Dashboard for an Admin to be able to manage quotes from end Users, Add Sub-Admin, revoke access of such Admin as well. Post Services and goods which end users can see. Integrated Payment gateway which Users can use to make payment for services offered by the Admin.</p>
                            {/* <a href="https://googleclone-blessed.netlify.app/" target="_blank" without rel="noopener noreferrer"
                            className="project_info-link">
                            Click to View
                            </a> */}
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
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Canaan Towers Backend</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Using Node, Express and MongoDB. Built a fully-fledged backend for an Admin and Users. The admin offers services and sells products. I design the architecture for the backend, built the APIs and database which house the all the vital information.         
                            </p>
                        </div>
                    </article>
                    {/* <!-- end of project --> */}
                    <article className="project item-margin">
                        <div className="project_info">
                            <h1 className="project_info-title">Deluxe Resort</h1>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Using react to build beach resort web app where user can navigate through available rooms.       
                            </p>
                            <a href="https://deluxeresort.netlify.app/" target="_blank" without rel="noopener noreferrer"
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
