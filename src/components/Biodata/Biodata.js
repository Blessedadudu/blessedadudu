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
                        <p class="aboutme-info_member-text">I am Blessed Adudu, a graduate of Covenant University, 
                        from the department of Mechanical Engineering (4.25/5 ~ CGPA).<br/>
                        I am a Frontend developer with core skills of HTML5, CSS3, Sass, Javascript, jQuery, React; and its ecosystem, and other modern 
                        technologies. 
                        I am into optimization, Progressive web app (PWA), SEO principles, Version control, Testing.<br/>
                        Also, I am smart, a willing and fast learner, a team player, problem solver and a critical thinker.</p>
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
                     href="https://drive.google.com/file/d/18YmvjNgU44THQqvkSY6Xk8kczvHaOWfE/view?usp=sharing" 
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
