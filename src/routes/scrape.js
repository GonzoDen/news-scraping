const express = require("express");
const browserObject = require("../browser");
const scraperController = require("../pageController");

const router = express.Router();

router.get("/", async (_, res) => {
  let browserInstance = browserObject.startBrowser();
  scraperController(browserInstance)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

module.exports = router;
