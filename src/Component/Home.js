import React from 'react';
import './Home.css';
import Banner from './Banner';
import CustomerReview from './CustomerReview';

function Home() {
    return (
        <div className="home">
            <Banner />
            <CustomerReview />
        </div>
    )
}

export default Home

