//scrapes only the first article, skips all others, but 3 pages are read with no problems
const PODROBNO_SOURCE = {
  baseUrl: "https://podrobno.uz/",
  searchQuery: "search/?tags=&q=найдено+тело+женщины&how=r&PAGEN_1=",
  searchSuffix: "",
  numberOfPages: 3,
  loadedElement: ".content-block",
  dataContainer: ".search-page",
  linkSelector: '[href*="/cat/"]',
  titleSelector: '[href*="/cat/"]',
  dateSelector: ".content-block small", // More specific selector for the date
  descriptionSelector: ".content-block p", // More specific selector for the description
};


/* Server started on port 3000
Could not resolve the browser instance =>  TimeoutError: Waiting for selector `.outer-wrapper` failed: Waiting failed: 30000ms exceeded
    at Timeout.<anonymous> (/Users/gonzoden/Documents/Pogrommirovanie/news-scraping/node_modules/puppeteer-core/lib/cjs/puppeteer/common/WaitTask.js:59:37)
    at listOnTimeout (node:internal/timers:581:17)
    at process.processTimers (node:internal/timers:519:7) */
const KUNUZ_SOURCE = {
  baseUrl: "https://kun.uz/",
  searchQuery: "ru/news/search?q=убита&page=",
  searchSuffix: "",
  numberOfPages: 1,
  loadedElement: ".outer-wrapper",
  dataContainer: ".news",
  linkSelector: ".news__title",
  titleSelector: ".news__title",
  dateSelector: ".news-meta > span",
  descriptionSelector: "",
};


//no need for 11 pages, only one was found
const GAZETA_SOURCE = {
  baseUrl: "https://www.gazeta.uz/",
  //searchQuery: "ru/search?q=убита&page=",
  //searchQuery: "ru/search?q=найдено+тело+женщины&page=",
  //searchQuery: "ru/search?q=скончалась&page=",
  //searchQuery: "ru/search?q=погибла&page=",
  //searchQuery: "ru/search?q=труп+женщины&page=",
  //searchQuery: "ru/search?q=смерти+избил&page=",
  //searchQuery: "ru/search?q=скончалась+от+полученных+травм&page=",
  //searchQuery: "ru/search?q=убийство+женщины&page=",
  searchQuery: "ru/search?q=изнасилование+женщины&page=",
  //searchQuery: "ru/search?q=изнасилование+девушки&page=",
  //searchQuery: "ru/search?q=умерла&page=",
  searchSuffix: "",
  numberOfPages: 1,
  loadedElement: ".lenta",
  dataContainer: ".nblock",
  linkSelector: ".nt > h3 > a",
  titleSelector: ".nt > h3 > a",
  dateSelector: ".nt > .ndt",
  descriptionSelector: ".nt > p",
};


//impossible to scrape
const UZNEWS_SOURCE = {
  baseUrl: "https://uznews.uz/",
  searchQuery: "posts/20735",
  searchSuffix: "",
  numberOfPages: 1,
  loadedElement: '[itemtype="https://schema.org/Article"]',
  dataContainer: '[itemprop="itemListElement"]',
  linkSelector: "div > .flex > a",
  titleSelector: "div > .flex > a > h3",
  dateSelector:
    'div > .flex > .justify-between > .gap-4 > [itemprop="datePublished"]',
  descriptionSelector: "div > .flex > p",
};

//can't move to the next page
const NUZ_SOURCE = {
  baseUrl: "https://nuz.uz/",
  searchQuery: "page/",
  searchSuffix: "?s=убита",
  numberOfPages: 1,
  loadedElement: ".tdc-content-wrap",
  dataContainer: ".tdb_module_loop",
  linkSelector: "div > .td-module-meta-info > h3 > a",
  titleSelector: "div > .td-module-meta-info > h3 > a",
  dateSelector:
    "div > .td-module-meta-info > .td-editor-date > span > span > time",
  descriptionSelector: "div > .td-module-meta-info > .td-excerpt",
};

module.exports = {
  PODROBNO_SOURCE,
  KUNUZ_SOURCE,
  GAZETA_SOURCE,
  UZNEWS_SOURCE,
  NUZ_SOURCE,
};
