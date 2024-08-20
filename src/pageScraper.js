/*const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");

const {
  PODROBNO_SOURCE: source, // Currently, using the GAZETA_SOURCE as an example
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
      const page = await browser.newPage();

      await page.goto(getPaginatedUrl(source, i), {
        waitUntil: PAGE_WAIT_UNTIL,
        timeout: PAGE_TIMEOUT,
      });

      await page.waitForSelector(loadedElement);

      const result = await page.$$eval(
        dataContainer,
        (articles, linkSelector, titleSelector, dateSelector, descriptionSelector) => {
          return articles.map(article => {
            const link = article.querySelector(linkSelector)?.href || "";
            const title = article.querySelector(titleSelector)?.textContent || "";
            const date = article.querySelector(dateSelector)?.textContent || "";
            const shortDescription = article.querySelector(descriptionSelector)?.textContent || "";

            return { link, title, date, shortDescription };
          });
        },
        linkSelector,
        titleSelector,
        dateSelector,
        descriptionSelector
      );

      resultData.push(...result);
      await page.close();
    }

    return {
      link: resultData.map(item => item.link),
      title: resultData.map(item => item.title),
      date: resultData.map(item => item.date),
      short_description: resultData.map(item => item.shortDescription),
    };
  },
};

module.exports = scraperObject;
*/



//loses date, records only first row

const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");

const {
  OZODLIK_SOURCE: source
  //KUNUZ_SOURCE: source,
  //GAZETA_SOURCE: source,
  //UZNEWS_SOURCE: source,
  //PODROBNO_SOURCE: source,
  //NUZ_SOURCE: source,
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
      //descriptionSelector,
    } = source;

    for (let i = START_PAGE_INDEX; i <= numberOfPages; i++) {
      let page = await browser.newPage();

      await page.goto(getPaginatedUrl(source, i), {
        waitUntil: PAGE_WAIT_UNTIL,
        timeout: PAGE_TIMEOUT,
      });
      await page.waitForSelector(loadedElement);

      let result = await page.$eval(
        dataContainer,
        (container, linkSelector, titleSelector, dateSelector, descriptionSelector) => {
          let data = {
            link: [],
            title: [],
            date: [],
            //short_description: []
          };

          const articles = container.querySelectorAll('a'); // Adjust this if needed based on the actual structure

          articles.forEach(article => {
            data.link.push(article.href || "");
            data.title.push(article.querySelector(titleSelector)?.textContent || "");
            data.date.push(article.querySelector(dateSelector)?.textContent || "");
            //data.short_description.push(article.querySelector(descriptionSelector)?.textContent || "");
          });

          return data;
        },
        linkSelector, // Pass the selectors to the $eval function
        titleSelector,
        dateSelector,
        //descriptionSelector
      );

      resultData.push(result);
      await page.close();
    }

    return {
      link: resultData.map((item) => item.link).flat(),
      title: resultData.map((item) => item.title).flat(),
      date: resultData.map((item) => item.date).flat(),
      //short_description: resultData.map((item) => item.short_description).flat(),
    };
  },
};

module.exports = scraperObject;


/*
//Scraping PODROBNO
//TODO: dates, description
//loses everything
const { getPaginatedUrl } = require("./helpers/page");
const {
  START_PAGE_INDEX,
  PAGE_WAIT_UNTIL,
  PAGE_TIMEOUT,
} = require("./constants/settings");

const {
  OZODLIK_SOURCE: source
  //KUNUZ_SOURCE: source,
  //GAZETA_SOURCE: source,
  //UZNEWS_SOURCE: source,
  //PODROBNO_SOURCE: source,
  //NUZ_SOURCE: source,
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
      //descriptionSelector,
    } = source;

    for (let i = 1; i <= numberOfPages; i++) {
      let page = await browser.newPage();

      try {
        await page.goto(`${source.baseUrl}${source.searchQuery}${i}`, {
          waitUntil: "networkidle2",
          timeout: 30000,
        });
        await page.waitForSelector(loadedElement);

        let result = await page.$eval(
          dataContainer,
          (container, linkSelector, titleSelector, dateSelector, descriptionSelector) => {
            let data = {
              link: [],
              title: [],
              date: [],
              //short_description: []
            };

            const articles = container.querySelectorAll(linkSelector);

            articles.forEach(article => {
              const href = article.href;
              const title = article.textContent.trim();
              //const description = article.querySelector(descriptionSelector)?.textContent.trim() || "No description found";
              const date = article.querySelector(dateSelector)?.textContent.trim() || "No date found";

              if (href && href.includes('/cat/') && !href.includes('search')) {
                data.link.push(href);
                data.title.push(title);
                data.date.push(date);
                //data.short_description.push(description);
              }
            });

            return data;
          },
          linkSelector,
          titleSelector,
          dateSelector,
          //descriptionSelector
        );

        resultData.push(result);
      } catch (err) {
        console.error(`Error scraping page ${i}: ${err.message}`);
      } finally {
        await page.close();
      }
    }

    // Flatten the result arrays to return a single array of links, titles, dates, and descriptions
    return {
      link: resultData.flatMap((item) => item.link),
      title: resultData.flatMap((item) => item.title),
      date: resultData.flatMap((item) => item.date),
      //short_description: resultData.flatMap((item) => item.short_description),
    };
  }
};

module.exports = scraperObject;
*/