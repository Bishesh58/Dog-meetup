import React from 'react';
import './Banner.css';
import bannerImge from '../img/dogsInPark.jpeg';
import Button from '@material-ui/core/Button';


function Banner() {
    return (
        <div className="banner">
           <div className="banner__left">
             <h3>Find similar dog to play with,
                 in your place</h3>
             <p>
                 This is a long Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima provident laboriosam expedita facere, consequatur voluptates consectetur veniam, quidem nobis ab eius culpa iusto quia distinctio quibusdam repellendus repellat voluptatum quo.
                 
             </p>
             <Button variant="contained" style={{ backgroundColor: "#1abc9c", color: "#FFFFFF" }}>Expore More</Button>
           </div>
           <div className="banner__right">
                <img src={bannerImge} alt="">
                </img>
           </div>
        </div>
    )
}

export default Banner
