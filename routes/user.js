const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  try {
    //generate new hashed pw using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
    });
    newUser.dog.push({
      dogname: req.body.dogname,
      dogbreed: req.body.dogbreed,
      dogweight: req.body.dogweight,
      dogcolor: req.body.dogcolor,
    });
    //save user
    const user = await newUser.save();
    res.status(200).json(user.dog);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong username or password!");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong username or password!");
    //send res
    res.status(200).json({ _id: user._id, username: user.username });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Account has been updated");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can update only your account");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can only delete your account");
  }
});

//get all dogs
router.get("/:id/dogs", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { dog } = user._doc;
    res.status(200).json(dog);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//add new dog
router.post("/:id/dogs", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        $push: {
          dog: {
            dogname: req.body.dogname,
            dogbreed: req.body.dogbreed,
            dogweight: req.body.dogweight,
            dogcolor: req.body.dogcolor,
          },
        },
      },
      { new: true }
    );
    res.status(200).json("New dog has been added successfully");
  } catch (error) {
    res.send(error);
  }
});

//update dog (req dog id)
router.put("/dogs/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { "dog._id": req.body.id },
      {
        $set: {
          "dog.$.dogname": req.body.dogname,
          "dog.$.dogbreed": req.body.dogbreed,
          "dog.$.dogweight": req.body.dogweight,
          "dog.$.dogcolor": req.body.dogcolor,
        },
      },
      { new: true }
    );
    res.status(200).json("dog details has been updated successfully");
  } catch (error) {
    res.send(error);
  }
});

//delete dog ***
router.delete("/dogs/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      {
        $pull: {
          dog: { _id: req.body.dogId },
        },
      },
      { new: true }
    );
    res.status(200).json("dog has been deleted successfully");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
