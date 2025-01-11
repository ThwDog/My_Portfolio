import './AboutMe.css'
import photo from "../Image/MyPhoto.jpg";
import React, { useEffect, useState } from 'react';

function skill() {
    return (
        <>
            <div className="space-info-head">
                <span> - Unity C# : <span className = "highLight"> medium </span> </span>
                <div className="space-info">
                    I'm passionate about game development and have 3 years of experience using Unity and C# to create immersive 3D and 2D platformers and first-person shooters.
                </div>
            </div>

            <div className="space-info-head">
                <span> - Design pattern : <span className = "highLight"> medium </span> </span>
                <div className="space-info">
                I know a few basic design patterns in C#like Singleton, Visitor, Observer, and FSM.
                </div>
            </div>

            <div className="space-info-head">
                <span>- HTML And Css : <span className = "highLight"> Basic </span></span>
                <div className ="space-info">
                    I'm a beginner in web development, and this portfolio is a testament to my passion for learning. 
                    I'm always eager to explore new technologies and techniques.
                </div>
            </div>

            <div className="space-info-head">
                <span>- AI : <span className = "highLight"> Basic </span></span>
                <div className ="space-info">
                    I've been diving into the world of AI, both in the classroom and through my own projects. 
                    I'm excited to learn more and apply my skills to new challenges.
                </div>
            </div>

            <div className="space-info-head">
                <span>- Shader , HLSL : <span className = "highLight"> Basic </span></span>
                <div className ="space-info">
                I'm not much of an artist, but I've got a handle on the basics of shader programming, 
                especially the math and lighting stuff.
                </div>
            </div>
        </>
    );
}

function language() {
    return (
        <>
            <div class="space-info-head">
                <span> - Thai : <span class = "highLight"> Native </span> </span>
            </div>
            <div class="space-info-head">
                <span> - English : <span class = "highLight"> Basic - Medium </span> </span>
            </div>
            <div class="space-info-head">
                <span> - Spanish : <span class = "highLight"> Basic </span> </span>
            </div>
            <div class="space-info-head">
                <span> - Japan : <span class = "highLight"> In Progress </span> </span>
            </div>
        </>
    );
}

function experience() {
    return (
        <>
            <div class="space-info-head">
                <span> - Revenue Department : <span class = "highLight"> 2020 </span> </span>
                <div class="space-info">
                I had a great internship experience at the Revenue Department. 
                I gained hands-on experience in warehouse management, using Excel to streamline processes and improve efficiency.
                </div>
            </div>
            
        </>
    );
}

function education() {
    return (
        <>
            <div class="space-info-head">
                <span> - Horwang School : <span class = "highLight"> 2016-2019 </span> </span>
                <div class="space-info">
                I was a student at Horwang School from 2016 to 2019, graduating in 2019
                </div>
            </div>
            <div class="space-info-head">
                <span> - Chitlada Technology Institute : <span class = "highLight"> 2019-2021 </span> </span>
                <div class="space-info">
                I graduated from Chitlada Technology Institute in 2021 with a Vocational Certificate in IT. 
                During my studies from 2019 to 2021, I developed a strong passion for coding.
                </div>
            </div>
            <div class="space-info-head">
                <span> - Rangsit University : <span class = "highLight"> 2022-Now </span> </span>
                <div class="space-info">
                I am currently pursuing a degree in Computer Game and Esports at Rangsit University.
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
            <div className="aboutme">
                <div id="about">
                    <div className="container">
                        <div className="row">
                            {/* Left col */}
                            <div className="about_col_1">
                                <img src={photo}></img>

                            </div>
                            <div className="about_col_2">
                                <h1 className="sub-title">About me</h1>
                                <br/>
                                <p className = "sub-dis">I've always been fascinated by how games work. Watching my older sister play sparked my interest. 
                                    I'd wonder how NPCs moved or how certain game mechanics were created. I couldn't play myself, so I'd watch and learn. 
                                    This early exposure ignited my passion for game development. I want to create games that people can lose themselves in, 
                                    just like I did as a kid.
                                </p>

                                <div className="tab-title">
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
                                        {experience()}
                                    </ul>
                                </div>
                                <div className={`tab-con ${activeTab === 'education' ? 'active-tab' : ''}`} id="education"> {/*Education */}
                                    <ul>
                                        {/* <li><span>Education</span><br /> Education</li> */}
                                        {education()}
                                        </ul>
                                </div>
                                <div className={`tab-con ${activeTab === 'Language' ? 'active-tab' : ''}`} id="Language"> {/*Education */}
                                    <ul>
                                        {/* <li><span>Language</span><br /> Language</li> */}
                                        {language()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;

