import React from 'react';
import './About.css';
import Team from './Team';
import imgAboutUs from '../img/imgAboutUs.jpeg'


function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__top--left">
                    <img src={imgAboutUs} alt="" />
                </div>
                <div className="about__top--right">
                    <h3>About us</h3>
                    <p>Our excellent and hard working team are here for you. They work day and night
                        to make our service best of the best. We are based on Auckland city. Our service is currently available
                        in New Zealand and we are planning to expand our service worldwide very soon!</p>
                </div>
            </div>
            <div className="about__bottom">
            <Team />
            </div>
        </div>
    )
}

export default About
