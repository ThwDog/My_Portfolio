import './AboutMe.css'
import AnimateSkillBar from '/src/Function/AnimateSkillBar.jsx';
import photo from "../Image/MyPhoto.jpg";
import React, { useEffect, useState } from 'react';


function skill() {
    return (
        <>
            <div class="space-info-head">
                <span> - Unity C# : <span class = "highLight"> medium </span> </span>
                <div class="space-info">
                    I'm passionate about game development and have 3 years of experience using Unity and C# to create immersive 3D and 2D platformers and first-person shooters.
                </div>
            </div>

            <div class="space-info-head">
                <span>- HTML And Css : <span class = "highLight"> Basic </span></span>
                <div class ="space-info">
                    I'm a beginner in web development, and this portfolio is a testament to my passion for learning. 
                    I'm always eager to explore new technologies and techniques.
                </div>
            </div>

            <div class="space-info-head">
                <span>- AI : <span class = "highLight"> Basic </span></span>
                <div class ="space-info">
                    I've been diving into the world of AI, both in the classroom and through my own projects. 
                    I'm excited to learn more and apply my skills to new challenges.
                </div>
            </div>

            <div class="space-info-head">
                <span>- Shader , HLSL : <span class = "highLight"> Basic </span></span>
                <div class ="space-info">
                I'm not much of an artist, but I've got a handle on the basics of shader programming, 
                especially the math and lighting stuff.
                </div>
            </div>
        </>
    );
}

function AboutMe() {
    const [activeTab, setActiveTab] = useState('skill');


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <section class="aboutme">
                <div id="about">
                    <div class="container">
                        <div class="row">
                            {/* Left col */}
                            <div class="about_col_1">
                                <img src={photo}></img>

                            </div>
                            <div class="about_col_2">
                                <h1 class="sub-title">About me</h1>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                </p>

                                <div class="tab-title">
                                    <p className={`tab-links ${activeTab === 'skill' ? 'active-link' : ''}`} onClick={() => handleTabClick('skill')}>Skill</p>
                                    <p className={`tab-links ${activeTab === 'Language' ? 'active-link' : ''}`} onClick={() => handleTabClick('Language')}>Language</p>
                                    <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('experience')}>Experience</p>
                                    <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')}>Education</p>
                                </div>
                                {/* content */}
                                <div className={`tab-con ${activeTab === 'skill' ? 'active-tab' : ''}`} id="skill"> {/*skill */}
                                    <ul>
                                        {/* <AnimateSkillBar /> */}
                                        {skill ()}
                                    </ul>
                                </div>
                                <div className={`tab-con ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience"> {/*Experience */}
                                    <ul>
                                        {/* <li><span>Experience</span><br /> Experience</li> */}
                                    </ul>
                                </div>
                                <div className={`tab-con ${activeTab === 'education' ? 'active-tab' : ''}`} id="education"> {/*Education */}
                                    <ul>
                                        {/* <li><span>Education</span><br /> Education</li> */}
                                    </ul>
                                </div>
                                <div className={`tab-con ${activeTab === 'Language' ? 'active-tab' : ''}`} id="Language"> {/*Education */}
                                    <ul>
                                        {/* <li><span>Language</span><br /> Language</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;

