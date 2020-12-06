import React from 'react';
import './Work.css'

export default function Work() {
    return (
        <div>
            <section class="work section-padding" id="progress">
            <div class="section-title_container">
                <div class="section-title_icon">
                    <i class="fas fa-spinner"></i>
                </div>
                <div class="section-title_text">
                    <h1 class="section-title_name">Work History</h1>
                    <h4 class="section-title_info">My work experience...</h4>
                </div>
            </div>
            <div className="flexbox-parent">
                    <article className="project item-margin">
                        <div className="project_info">
                            <div className='flex'>
                                <h1 className="project_info-title">Instiq professional services</h1> <span><h2>Sep 2020 - Present</h2></span>
                            </div>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Building industry standard products for the African Fintech community using latest technologies</p>
                        </div>
                    </article>
                    <article className="project item-margin">
                        <div className="project_info">
                            <div className='flex'>
                                <h1 className="project_info-title">Eyo TV</h1> <span><h2>Jul 2020 – Aug 2020</h2></span>
                            </div>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Contracted to build a scalable, and cross platform responsive web application.</p>
                        </div>
                    </article>
                    <article className="project item-margin">
                        <div className="project_info">
                            <div className='flex'>
                                <h1 className="project_info-title">Onehub Nigeria</h1> <span><h2>Nov 2019 -  Jun 2020 </h2></span>
                            </div>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Building industry standard websites for the Fintech community 
            using latest technologies</p>
                        </div>
                    </article>
                    <article className="project item-margin">
                        <div className="project_info">
                            <div className='flex'>
                                <h1 className="project_info-title">Freelance Frontend Developer</h1> 
                                <span><h2>Dec 2018 - Nov 2019</h2></span>
                            </div>
                            <div className="project_info-underline"></div>
                            <p className="project_info-text">Developed intuitive, user-friendly, 
                            and tailored websites for various clients        
                            </p>
                        </div>
                    </article>
            </div>
            </section>
        </div>
    )
}
