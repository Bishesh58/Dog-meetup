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
    })
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

//get all dogs

module.exports = router;
