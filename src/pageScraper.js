const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");
const {
  UPL_SOURCE: source,
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
      descriptionSelector,
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
        (results, linkSelector, titleSelector, dateSelector, descriptionSelector) => {
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
          data["short_description"] = results.map(
            (el) => el.querySelector(descriptionSelector)?.textContent || ""
          );

          return data;
        },
        linkSelector, // Pass the selectors to the $$eval function
        titleSelector,
        dateSelector,
        descriptionSelector
      );

      resultData.push(result);
      page.close();
    }

    return {
      link: resultData.map((item) => item.link).flat(),
      title: resultData.map((item) => item.title).flat(),
      date: resultData.map((item) => item.date).flat(),
      short_description: resultData
        .map((item) => item.short_description)
        .flat(),
    };
  },
};

module.exports = scraperObject;
