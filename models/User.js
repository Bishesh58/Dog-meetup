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
      max: 130,
    },
    dogcolor: {
      type: String,
      min: 2,
    },
    dogpic: {
      type: String,
      default: null,
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
    firstname: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    gender: {
      type: String,
      trim: true,
      default: null,
    },
    phone: {
      type: Number,
      maxlength: 10,
    },
    address: {
      type: String,
    },
    lat: {
      type:Number,
    },
    long: {
      type: Number,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      requre: true,
      min: 4,
      require: true,
    },
    profilepic: {
      type: String,
      default: null,
    },
    dogs: [DogSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
