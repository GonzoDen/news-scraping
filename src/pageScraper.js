/*const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");
const {
  SPUTNIK_SOURCE: source,
} = require("./constants/sources");

const scraperObject = {
  async scraper(browser) {
    const resultData = [];
    const {
      numberOfPages,
      loadedElement,
      dataContainer,
      linkSelector,
      titleSelector,
      dateSelector,
    } = source;

    for (let i = START_PAGE_INDEX; i <= numberOfPages; i++) {
      let page = await browser.newPage();

      await page.goto(getPaginatedUrl(source, i), {
        waitUntil: PAGE_WAIT_UNTIL,
        timeout: PAGE_TIMEOUT,
      });
      await page.waitForSelector(loadedElement);

      let result = await page.$$eval(
        dataContainer,
        (results, linkSelector, titleSelector, dateSelector) => {
          let data = {};

          data["link"] = results.map(
            (el) => el.querySelector(linkSelector)?.href || ""
          );
          data["title"] = results.map(
            (el) => el.querySelector(titleSelector)?.textContent || ""
          );
          data["date"] = results.map(
            (el) => el.querySelector(dateSelector)?.textContent || ""
          );


          return data;
        },
        linkSelector, // Pass the selectors to the $$eval function
        titleSelector,
        dateSelector,
      );

      resultData.push(result);
      page.close();
    }

    return {
      link: resultData.map((item) => item.link).flat(),
      title: resultData.map((item) => item.title).flat(),
      date: resultData.map((item) => item.date).flat(),

    };
  },
};

module.exports = scraperObject;
*/

const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");
const {
  SPUTNIK_SOURCE: source,
} = require("./constants/sources");

const scraperObject = {
  async scraper(browser, n = 1) { // 'n' is the number of times to click the button
    const resultData = [];
    const {
      loadedElement,
      dataContainer,
      linkSelector,
      titleSelector,
      dateSelector,
    } = source;

    let page = await browser.newPage();

    await page.goto(getPaginatedUrl(source), {
      waitUntil: PAGE_WAIT_UNTIL,
      timeout: PAGE_TIMEOUT,
    });

    await page.waitForSelector(loadedElement);

    // Define the selector for the "Load More" button
    const loadMoreButtonSelector = ".list__more"; // replace with the actual selector

    let loadMore = true;
    let clicks = 0;

    while (loadMore && clicks < n) {
      try {
        await page.waitForSelector(loadMoreButtonSelector, { timeout: 48000 });
        await page.click(loadMoreButtonSelector);
        await page.waitForTimeout(48000); // Wait for the content to load
        clicks++;
      } catch (e) {
        loadMore = false; // Stop if button not found or content is fully loaded
      }
    }

    let result = await page.$$eval(
      dataContainer,
      (results, linkSelector, titleSelector, dateSelector) => {
        let data = {};

        data["link"] = results.map(
          (el) => el.querySelector(linkSelector)?.href || ""
        );
        data["title"] = results.map(
          (el) => el.querySelector(titleSelector)?.textContent || ""
        );
        data["date"] = results.map(
          (el) => el.querySelector(dateSelector)?.textContent || ""
        );

        return data;
      },
      linkSelector, // Pass the selectors to the $$eval function
      titleSelector,
      dateSelector,
    );

    resultData.push(result);
    await page.close();

    return {
      link: resultData.map((item) => item.link).flat(),
      title: resultData.map((item) => item.title).flat(),
      date: resultData.map((item) => item.date).flat(),
    };
  },
};

module.exports = scraperObject;
