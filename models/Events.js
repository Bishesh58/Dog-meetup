const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    title: {
      type: String,
      require: true,
      min: 3,
    },
    dogname: {
      type: String,
      min: 4,
    },
    dogtype: {
      type: String,
    },
    dogweight: {
      type: Number,
    },
    activities: {
      type: Array,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Events", EventSchema);
