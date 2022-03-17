const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
  } catch (e) {
    console.log(e);
    nex(e);
  }
});

module.exports = router;
