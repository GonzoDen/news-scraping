const express = require('express');
const browserObject = require('../browser');
const scraperController = require('../pageController');

const router = express.Router();

router.get('/', async (req, res) => {
    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();
    // Pass the browser instance to the scraper controller
    scraperController(browserInstance)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error(error);
            res.json({ error });
        })
});

module.exports = router;
