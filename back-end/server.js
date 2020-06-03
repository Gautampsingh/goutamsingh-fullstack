const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
// const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

//Import Routes
const usersRouter = require("./routes/users");

// Middleware
app.use("/users", usersRouter);

// ROUTES
app.get("/", (req, res) => {
  res.send("we are at home");
});

// connect to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to DB: " + db);
    }
  }
);

// mongoose.connect(uri, { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', () => console.log('Successfully connected to MongoDB'));
// connection.on('error', (e) => console.log(e));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
