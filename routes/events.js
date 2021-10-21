const router = require("express").Router();
const Events = require("../models/Events");

//create post
router.post("/", async (req, res) => {
  const newEvent = new Events(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all posts
router.get("/", async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (error) {
    res.send(500).json(error);
  }
});

//update posts
router.patch("/:id", async (req, res) => {
  try {
    const event = await Events.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          profilepic: req.body.profilepic,
          title: req.body.title,
          dogtype: req.body.dogtype,
          dogweight: req.body.dogweight,
          activities: req.body.activities,
          emstartDateail: req.body.startDate,
          startDate: req.body.startDate,
          lat: req.body.lat,
          long: req.body.long,
          address: req.body.address,
          going: req.body.going,
          status: req.body.status,
        },
      },
      { new: true }
    );
    res.send("accound updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete event
router.delete("/:id", async (req, res) => {
  try {
    await Events.findByIdAndDelete(req.params.id);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
