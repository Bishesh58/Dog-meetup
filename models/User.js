const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema(
  {
    dogname: {
      type: String,
      min: 3,
      max: 20,
    },
    dogbreed: {
      type: String,
      max: 50,
    },
    dogweight: {
      type: Number,
      max: 120,
    },
    dogcolor: {
      type: String,
      min: 2,
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      requre: true,
      min: 4,
    },
    address: {
      type: String,
    },
    dog: [DogSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);



