//duplicates the date and description

const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");

const {
  PODROBNO_SOURCE: source,
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

      try {
        await page.goto(getPaginatedUrl(source, i), {
          waitUntil: PAGE_WAIT_UNTIL,
          timeout: PAGE_TIMEOUT,
        });
        await page.waitForSelector(loadedElement);

        // Scrape all articles in the dataContainer
        let articles = await page.$$eval(
          `${dataContainer} a${linkSelector}`,
          (links, titleSelector, dateSelector, descriptionSelector) => {
            return links.map(link => {
              const container = link.closest("div.search-page");
              return {
                link: link.href,
                title: link.textContent.trim(),
                date: container.querySelector(dateSelector)?.textContent,
                short_description: container.querySelector(descriptionSelector)?.textContent,
              };
            });
          },
          titleSelector,
          dateSelector,
          descriptionSelector
        );

        resultData.push(...articles);
      } catch (err) {
        console.error(`Error scraping page ${i}: ${err.message}`);
      } finally {
        await page.close();
      }
    }

    return {
      link: resultData.map(item => item.link),
      title: resultData.map(item => item.title),
      date: resultData.map(item => item.date),
      short_description: resultData.map(item => item.short_description),
    };
  }
};

module.exports = scraperObject;

/*

const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");

const {
  PODROBNO_SOURCE: source,
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

      try {
        await page.goto(getPaginatedUrl(source, i), {
          waitUntil: PAGE_WAIT_UNTIL,
          timeout: PAGE_TIMEOUT,
        });
        await page.waitForSelector(loadedElement);

        // Scrape all articles in the dataContainer
        let articles = await page.$$eval(
          `${dataContainer} a${linkSelector}`,
          (links, titleSelector, dateSelector, descriptionSelector) => {
            
            return links.map(link => {
              const container = link.closest("div.search-page");
              const dateElement = Array.from(container.querySelectorAll(dateSelector))
                .find(el => el.textContent.includes("Изменен"))
              return {
                link: link.href,
                title: link.textContent.trim(),
                date: dateElement ? dateElement.textContent.replace("Изменен: ", "").trim() : null,
                short_description: container.querySelector(descriptionSelector)?.textContent.trim(),
              };
            });
          },
          titleSelector,
          dateSelector,
          descriptionSelector
        );

        resultData.push(...articles);
      } catch (err) {
        console.error(`Error scraping page ${i}: ${err.message}`);
      } finally {
        await page.close();
      }
    }

    return {
      link: resultData.map(item => item.link),
      title: resultData.map(item => item.title),
      date: resultData.map(item => item.date),
      short_description: resultData.map(item => item.short_description),
    };
  }
};

module.exports = scraperObject;
*/