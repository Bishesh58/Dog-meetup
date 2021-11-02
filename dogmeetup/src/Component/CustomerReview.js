import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import './CustomerReview.css';
import {fetchReview} from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

function CustomerReview() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchReview(dispatch);
  }, [])

  const {reviewDetails} = useSelector((state)=> state.reviews);

  return (
    <div className="customerReview">
      <div className="customerReview__title">
        <h4>What our Customers are saying</h4>
      </div>
      <div className="customerReview__cards">
        {reviewDetails?.map((review, i)=>{
          return <ReviewCard review = {review} i={i}/>
        })}
      </div>
    </div>
  );
}

export default CustomerReview;
