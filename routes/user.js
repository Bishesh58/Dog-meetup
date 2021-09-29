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
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      password: hashedPassword,
      profilepic: req.body.profilepic,
    });

    //create new dog
    newUser.dogs.push({
      dogname: req.body.dogname,
      dogbreed: req.body.dogbreed,
      dogweight: req.body.dogweight,
      dogcolor: req.body.dogcolor,
      dogpic: req.body.dogpic,
    });
    //save user
    const user = await newUser.save();
    res.status(200).json("register success");
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
    const { _id, ...other } = user._doc;
    res.status(200).json(_id);
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
router.patch("/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (user) {
    try {
      const validPassword = await bcrypt.compare(
        req.body.oldPassword,
        user.password
      );
      if (validPassword) {
        if (req.body.newPassword) {
          const salt = await bcrypt.genSalt(10);
          req.body.newPassword = await bcrypt.hash(req.body.newPassword, salt);

          const user = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: {
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                phone: req.body.phone,
                address: req.body.address,
                email: req.body.email,
                password: req.body.newPassword,
                profilepic: req.body.profilepic,
              },
            },
            { new: true }
          );
          res.send("accound updated successfully");
        } else {
          const user = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: {
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                phone: req.body.phone,
                address: req.body.address,
                email: req.body.email,
                profilepic: req.body.profilepic,
              },
            },
            { new: true }
          );
          res.send("accound updated successfully");
        }
      } else {
        res.send("wrong password!");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can update only your account");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  !validPassword && res.status(400).json("wrong password!");

  if (validPassword) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can only delete your account");
  }

  // if (req.body.userId === req.params.id) {
  //   try {
  //     await User.findByIdAndDelete(req.params.id);
  //     res.status(200).json("Account has been deleted successfully");
  //   } catch (error) {
  //     return res.status(500).json(error);
  //   }
  // } else {
  //   return res.status(403).json("You can only delete your account");
  // }
});

//get all dogs
router.get("/:id/dogs", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { dogs } = user._doc;
    res.status(200).json(dogs);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//add new dog
router.post("/:id/dogs", async (req, res) => {
  try {
    console.log(req.body.id);
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        $push: {
          dogs: {
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
router.patch("/dogs/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { "dogs._id": req.body.dogId },
      {
        $set: {
          "dogs.$.dogname": req.body.dogname,
          "dogs.$.dogbreed": req.body.dogbreed,
          "dogs.$.dogweight": req.body.dogweight,
          "dogs.$.dogcolor": req.body.dogcolor,
          "dogs.$.dogpic": req.body.dogpic,
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
          dogs: { _id: req.body.dogId },
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
