const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("you fucked up");

    res.send({ jwt: toJWT({ userId: 1 }) });
  } catch (e) {
    console.log(e);
    // next(e);
  }
});

module.exports = router;
