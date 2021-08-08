import React from 'react';
import './Home.css';
import Banner from './Banner';
import CustomerReview from './CustomerReview';
import CarasoulComp from './carasoul/CarasoulComp';

function Home() {
    return (
        <div className="home">
            <Banner />
            <CarasoulComp />
            <CustomerReview />
        </div>
    )
}

export default Home

