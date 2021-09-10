const router = require('express').Router();
const Review = require('../models/Review');

//create review
router.post("/", async(req, res)=>{
    const newReview = new Review(req.body)
    try {
      const savedReview = await newReview.save()
      res.status(200).json(savedReview);
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all reviews
router.get("/", async(req, res)=>{
    try {
        const reviews = await Review.find()
        res.status(200).json(reviews);
    } catch (error) {
        res.send(500).json(error)
    }
})

//update


//delete


module.exports = router;