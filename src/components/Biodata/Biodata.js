import React from 'react'
import './biodata.css'

export default function biodata() {
    return (
        <div>
        <section class="aboutme section-padding" id="aboutme">
            <div class="section-title_container">
                <div class="section-title_icon">
                    <i class="fas fa-user"></i>
                </div>
                <div class="section-title_text">
                    <h1 class="section-title_name">BIO-DATA</h1>
                    <h4 class="section-title_info"> A brief of who I am...</h4>
                </div>
            </div>
            <article class="aboutme-info item-margin">
                    <div class="aboutme-info_body">
                        <h1 class="aboutme-info_member-name">Blessed Adudu</h1>
                        <h4 class="aboutme-info_member-job">Frontend Developer</h4>
                        <p class="aboutme-info_member-text">I am a passionate Frontend developer with core skills of HTML5, CSS3, Sass, JavaScript, jQuery, React, Redux, React Hooks, Vue, Node, Express, MongoDB, PostgreSQL and other modern technologies. I am into optimization, Progressive Web Apps (PWA), Testing.<br/>
                        With my skillset, I have helped companies built industry standard websites to satisfy their clients.
                        I have worked extensively in teams with professionals across different fields to produce tangible
                        results. I am fluent in English, and hope to reach the same level in French and Italian..</p>
                <article class="aboutme-info_member-favorites">
                    {/* <!-- single favorite --> */}
                    <div class="aboutme-info_member-single-favorite">
                        {/* <!-- icon --> */}
                        <div class="aboutme-info_member-single-favorite-icon">
                        <i class="fas fa-check"></i>
                        </div>
                        {/* <!-- text --> */}
                        <div class="aboutme-info_member-single-favorite-text">read</div>
                    </div>
                    {/* <!-- end of single favorite --> */}
                    {/* <!-- single favorite --> */}
                    <div class="aboutme-info_member-single-favorite">
                        {/* <!-- icon --> */}
                        <div class="aboutme-info_member-single-favorite-icon">
                        <i class="fas fa-check"></i>
                        </div>
                        {/* <!-- text --> */}
                        <div class="aboutme-info_member-single-favorite-text">Tech</div>
                    </div>
                    {/* <!-- end of single favorite --> */}
                    {/* <!-- single favorite --> */}
                    <div class="aboutme-info_member-single-favorite">
                        {/* <!-- icon --> */}
                        <div class="aboutme-info_member-single-favorite-icon">
                        <i class="fas fa-check"></i>
                        </div>
                        {/* <!-- text --> */}
                        <div class="aboutme-info_member-single-favorite-text">Good Music</div>
                    </div>
                    {/* <!-- end of single favorite --> */}
                    {/* <!-- resume --> */}
                     <a class="resume" 
                     href="https://drive.google.com/file/d/1hMoivpzwXJawx57rWCEOHnsr0W9etGpx/view?usp=sharing" without rel="noopener noreferrer"
                     target="_blank">
                         click to download resume
                    </a>
                </article>
            </div>
            </article>
        </section>
    </div>
    )
}
