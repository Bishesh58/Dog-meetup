import React from "react";
import ReviewCard from "./ReviewCard";
import "./CustomerReview.css";

function CustomerReview() {
  return (
    <div className="customerReview">
      <div className="customerReview__title">
        <h4>What our customer has to say </h4>
      </div>
      <div className="customerReview__cards">
        <ReviewCard
          imgURL="https://static6.depositphotos.com/1003617/541/v/950/depositphotos_5416637-stock-illustration-face-man.jpg"
          fname="John"
          lname="Snow"
          title="This service amazing"
          description="I meet new friends for my poppy"
        />
        <ReviewCard
          imgURL="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-limages-2.jpg"
          fname="Olivia"
          lname="Taylor"
          title="We trained our dog with our neighbour dog"
          description="I meet new friend for my dog. He loves to play with other dogs and
          this service helped to achieve that. Thank you!"
        />
        <ReviewCard
          imgURL="https://pbs.twimg.com/media/DPPhNR4U8AAp1Rj.jpg"
          fname="Adam"
          lname="Wilson"
          title="I enjoyed the service"
          description="awesome idea"
        />
        <ReviewCard
          imgURL="https://i.pinimg.com/originals/90/23/07/9023073ca6b2dcab96f342e23d047b7d.png"
          fname="Sophia"
          lname="Jones"
          title="My dog was very happy"
          description="My dog got to play with so many dog's, he was so happy"
        />
      </div>
    </div>
  );
}

export default CustomerReview;
