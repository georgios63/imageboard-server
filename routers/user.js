const { Router } = require("express");
const Users = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    if (allUsers.length <= 0) return res.status(404).send("Users not found!");

    res.send(allUsers);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || email === " " || !password || !fullName)
      return res.status(400).send("Authentication problem");

    const user = await Users.create({
      email,
      fullName,
      password: bcrypt.hashSync(password, 10),
    });

    res.send(user);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
