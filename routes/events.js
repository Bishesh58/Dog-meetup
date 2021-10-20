const router = require('express').Router();
const Events = require('../models/Events');

//create post
router.post("/", async(req, res)=>{
    const newEvent = new Events(req.body)
    try {
      const savedEvent = await newEvent.save()
      res.status(200).json(savedEvent);
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all posts
router.get("/", async(req, res)=>{
    try {
        const events = await Events.find()
        res.status(200).json(events);
    } catch (error) {
        res.send(500).json(error)
    }
})

//update posts
router.patch("/:id", async(req, res)=>{
    const newEvent = new Events(req.body)
    try {
      const savedEvent = await newEvent.save()
      res.status(200).json(savedEvent);
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//update posts

module.exports = router;