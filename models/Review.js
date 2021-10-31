const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      min: 3,
    },
    fname: {
      type: String,
      require: true,
      min: 3,
    },
    lname: {
      type: String,
      require: true,
      min: 3,
    },
    title: {
      type: String,
      require: true,
      min: 3,
    },
    description: {
      type: String,
      min: 4,
    },
    profilepic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
