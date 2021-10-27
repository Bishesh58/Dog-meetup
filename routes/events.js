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

//add going people
router.put("/:id/going", async (req, res) => {
  try {
    const event = await Events.findById( req.params.id)
    if(!event.going.includes(req.body.userId)){
      await event.updateOne({ $push: { going: req.body.userId } });
      res.status(200).json("You have joined");
    } else {
      await event.updateOne({ $pull: { going: req.body.userId } });
      res.status(200).json("You are removed from going");
    }
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

//filter search event
router.get("/filter/search", async (req, res) => {
  // const { searchQuery, tags } = req.query;
  // // if (searchQuery == "none" && tags === ",,") {
  // //   res.send("you have selected nothing..");
  // // } else {
  // // }
  // let regex = new RegExp(searchQuery, "i");
  // const events = await Events.find({
  //   $and: [
  //     {
  //       $or: [
  //         {
  //           title: regex,
  //         },
  //         {
  //           dogtype: regex,
  //         },
  //         {
  //           dogweight: regex,
  //         },
  //         {
  //           address: regex,
  //         },
  //       ],
  //     },
  //   ],
  // });
  // res.status(200).json(events);
  // try {
  //   const text = new RegExp(searchQuery, "i");
  //   const events = await Events.find({
  //     $or: [{ text }, { tags: { $in: tags.split(",") } }],
  //   });
  //   res.status(200).json(events);
  // } catch (error) {
  //   res.send(500).json({ message: error.message });
  // }
});

module.exports = router;
