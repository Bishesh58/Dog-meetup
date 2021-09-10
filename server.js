const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotevn = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

//import routes
const eventRoute = require("./routes/events.js");
const userRoute = require("./routes/user.js");
const reviewRoute = require("./routes/review.js");

//initialize
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
dotevn.config();

app.use("/api/events", eventRoute);
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);

//db
mongoose
  .connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => console.log(err));

//deployment:

if (process.env.NODE_ENV === "production") {
  app.use(express.static('dogmeetup/build'));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dogmeetup", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("app is running on port 5000!");
});
