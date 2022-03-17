const { Router } = require("express");
const Images = require("../models").image;

const router = new Router();

//create a route that fetch all the images
router.get("/", async (req, res, next) => {
  try {
    const allImages = await Images.findAll();

    if (allImages.length <= 0) return res.status(404).send("No images found!");

    res.send(allImages);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// create a route that stores a new image
router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;

    if (!url) return res.status(400).send("Image not found");

    const image = await Images.create(req.body);

    res.send(image);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
