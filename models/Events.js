const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    profilepic: {
      type: String,
    },
    title: {
      type: String,
      require: true,
      min: 3,
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
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
    },
    going: {
      type: Number,
      default: 1,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Events", EventSchema);
