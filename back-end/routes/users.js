const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  // router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add user
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const message = req.body.message;
  const date = Date.parse(req.body.date);

  const newUser = new User({
    username,
    email,
    phone,
    message,
    date,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
