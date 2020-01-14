import React from 'react';
import './Header.css';
import videoMp4 from '../../assets/video/Working-it/Mp4/Working-it.mp4';
import videoOgv from '../../assets/video/Working-it/Ogv/Working-it.ogv';
import videoWebm from '../../assets/video/Working-it/Webm/Working-it.webm';


const togglehandler = () => {
    let toggler = document.getElementById('nav_links');
      toggler.classList.toggle('opened');
  };


const Header = () => {
   return (
        <div>
            <header className="header" id="header">
                <article className="banner">
                    <h1 className="bannertitle">Blessed Adudu. 
                        <strong className="banner_titlename">Frontend Developer...</strong>
                    </h1>
                </article>

                {/* video */}
                <div className="video_container">
                        <video className="video_item" id="video" autoPlay loop muted>
                            <source src={videoMp4} type="video/mp4"/>  
                            <source src={videoOgv} type="video/ogv"/>  
                            <source src={videoWebm} type="video/webm"/> 
                        browser does not support the video tag
                        </video>
                </div>
                {/* video overlay*/}
                <div className="video_overlay"></div>
                {/* nav btn */}
                <div className="navBtn">
                    <i class="fas fa-bars" onClick={togglehandler}></i>
                </div>
                {/* navbar */}
                <nav className="nav">
                    <ul className="nav_links" id="nav_links">
                       <div>
                            <li>
                                <a href="#header" className="nav_singlelink">home</a>
                            </li>
                            <li>
                                <a href="#aboutme" className="nav_singlelink">About</a>
                            </li>
                            <li>
                                <a href="#projectz" className="nav_singlelink">projects</a>
                            </li>
                            <li>
                                <a href="#map" className="nav_singlelink">contact</a>
                            </li>
                        </div>
                    </ul>
                </nav>
                {/* social icons */}
                <div className="social_icons">
                    {/* linkedin icon */}
                    <a href="https://www.linkedin.com/in/blessed-adudu-244494164/" target="_blank" 
                        rel="noopener noreferrer"
                        className="social_icon social-icon-linkedin">
                        <i className="fab fa-linkedin"/>
                    </a>
                    {/* github icon */}
                    <a href="https://github.com/blessedadudu" target="_blank" rel="noopener noreferrer"
                    className="social_icon social-icon-github">
                        <i className="fab fa-github"/>
                        </a>
                    {/* TWITTER icon  */}
                    <a href="https://twitter.com/blessed_tld" target="_blank" rel="noopener noreferrer"
                     className="social_icon social-icon-twitter">
                        <i className="fab fa-twitter"/>
                    </a>
                </div>
            </header>
        </div>
   )
}

export default Header