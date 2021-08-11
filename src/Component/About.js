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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facilis delectus incidunt, cum sapiente quam pariatur eum. Doloribus, corrupti quod. Molestiae commodi officiis ex odio natus in iusto dolorum totam!</p>
                </div>
            </div>
            <div className="about__bottom">
            <Team />
            </div>
        </div>
    )
}

export default About
