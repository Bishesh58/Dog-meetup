import React from 'react';
import ReviewCard from './ReviewCard';
import './CustomerReview.css';

function CustomerReview() {
  return (
    <div className="customerReview">
      <div className="customerReview__title">
        <h4>What our Customers are saying</h4>
      </div>
      <div className="customerReview__cards">
        <ReviewCard
          imgURL="https://mawaleinfotech.com/images/about-man-img.jpg"
          fname="John"
          lname="Snow"
          title="This service amazing"
          description="I meet new friends for my poppy"
          color="#fab1a0"
        />
        <ReviewCard
          imgURL="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          fname="Olivia"
          lname="Taylor"
          title="We trained our dog with our neighbour dog"
          description="I meet new friend for my dog. He loves to play with other dogs and
          this service helped to achieve that. Thank you!"
          color="#74b9ff"
        />
        <ReviewCard
          imgURL="https://p.kindpng.com/picc/s/160-1600378_transparent-happy-person-png-happy-man-face-png.png"
          fname="Adam"
          lname="Wilson"
          title="I enjoyed the service"
          description="awesome idea"
          color="#a29bfe"
        />
        <ReviewCard
          imgURL="https://bloximages.chicago2.vip.townnews.com/idahostatejournal.com/content/tncms/assets/v3/editorial/f/e7/fe721452-bb3c-11e3-a46e-0019bb2963f4/533d715740f9c.image.jpg"
          fname="Sophia"
          lname="Jones"
          title="My dog was very happy"
          description="My dog got to play with so many dog's, he was so happy"
          color="#00b894"
        />
      </div>
    </div>
  );
}

export default CustomerReview;
