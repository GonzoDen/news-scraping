const puppeteer = require("puppeteer");

const config = {
  headless: false,
  args: ["--disable-setuid-sandbox"],
  ignoreHTTPSErrors: true,
};

async function startBrowser() {
  let browser;
  try {
    browser = await puppeteer.launch(config);
  } catch (err) {
    console.error("Could not create a browser instance => : ", err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
