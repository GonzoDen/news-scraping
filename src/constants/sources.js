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
  dateSelector: "small", // More specific selector for the date
  descriptionSelector: "p", // More specific selector for the description
};

const KUNUZ_SOURCE = {
  baseUrl: "https://kun.uz/",
  //searchQuery: "ru/news/search?q=убита&page=",
  //searchQuery: "ru/news/search?q=найдено+тело+женщины&page=",
  //searchQuery: "ru/news/search?q=скончалась&page=",
  //searchQuery: "ru/news/search?q=погибла&page=",
  //searchQuery: "ru/news/search?q=труп+женщины&page=",
  //searchQuery: "ru/news/search?q=смерти+избил&page=",
  //searchQuery: "ru/news/search?q=скончалась+от+полученных+травм&page=",
  //searchQuery: "ru/news/search?q=убийство+женщины&page=",
  //searchQuery: "ru/news/search?q=изнасилование+женщины&page=",
  //searchQuery: "ru/news/search?q=изнасилование+девушки&page=",
  searchQuery: "ru/news/search?q=умерла&page=",
  searchSuffix: "",
  numberOfPages: 1,
  loadedElement: ".news-inner__block",  
  dataContainer: "#news-list",  
  linkSelector: ".small-cards__default-item",  
  titleSelector: ".small-cards__default-text", 
  dateSelector: ".gray-date > p",  
  descriptionSelector: ".small-cards__default-text",  
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

const OZODLIK_SOURCE = {
  baseUrl: "https://rus.ozodlik.org/",
  searchQuery: "s?k=убита&tab=all&pi=",
  searchSuffix: "",
  numberOfPages: 1,
  loadedElement: ".media-block-wrap",
  dataContainer: ".media-block",
  linkSelector: ".media-block > a",
  titleSelector: ".media-block__content .media-block__title",
  dateSelector: ".media-block__content .date",
  descriptionSelector: "" // No description found in the provided HTML
};


/*
//todo: UZBEK keywords
const DARYO_SOURCE = {
  baseUrl: "https://daryo.uz/",
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
*/



module.exports = {
  PODROBNO_SOURCE,
  KUNUZ_SOURCE,
  GAZETA_SOURCE,
  UZNEWS_SOURCE,
  NUZ_SOURCE,
  OZODLIK_SOURCE
};
