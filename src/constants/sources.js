const PODROBNO_SOURCE = {
  baseUrl: "https://podrobno.uz/",
  //searchQuery: "search/?tags=&q=найдено+тело+женщины&how=r&PAGEN_1=",
  searchQuery: "search/?tags=&q=найдено+тело+женщины&how=r&PAGEN_1=",
  searchSuffix: "",
  numberOfPages: 3,
  loadedElement: ".content-block",
  dataContainer: ".search-page",
  linkSelector: '[href*="/cat/"]',
  titleSelector: '[href*="/cat/"]',
  dateSelector: "small",
  descriptionSelector: "p",
};

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

const GAZETA_SOURCE = {
  baseUrl: "https://www.gazeta.uz/",
  searchQuery: "ru/search?q=убита&page=",
  searchSuffix: "",
  numberOfPages: 11,
  loadedElement: ".lenta",
  dataContainer: ".nblock",
  linkSelector: ".nt > h3 > a",
  titleSelector: ".nt > h3 > a",
  dateSelector: ".nt > .ndt",
  descriptionSelector: ".nt > p",
};

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

const SPUTNIK_SOURCE = {
  baseUrl: "https://uz.sputniknews.ru/",
  //searchQuery: "search/?query=убита", 
  //searchQuery: "search/?query=найдено+тело+женщины", 
  //searchQuery: "search/?query=скончалась", 
  //searchQuery: "search/?query=погибла", 
  //searchQuery: "search/?query=труп+женщины", 
  //searchQuery: "search/?query=смерти+избил", 
  //searchQuery: "search/?query=скончалась+от+полученных+травм", 
  //searchQuery: "search/?query=убийство+женщины", 
  //searchQuery: "search/?query=изнасилование+женщины", 
  //searchQuery: "search/?query=изнасилование+девушки", 
  searchQuery: "search/?query=умерла", 
  searchSuffix: "",
  numberOfPages: 1,  // Adjust based on how many pages you want to scrape
  loadedElement: ".list.list-search", // The main container that ensures the page is fully loaded
  dataContainer: ".list__item", // Each news item is inside the <div> with class "list__item"
  linkSelector: ".list__title", // The <a> tag with class "list__title" containing the link to the news article
  titleSelector: ".list__title", // The same <a> tag with class "list__title" for extracting the title
  dateSelector: ".list__date .date", // The <span> element inside the .list__date div for the date
  //descriptionSelector: null, // There doesn't seem to be a description element in the provided HTML
};


module.exports = {
  PODROBNO_SOURCE,
  KUNUZ_SOURCE,
  GAZETA_SOURCE,
  UZNEWS_SOURCE,
  NUZ_SOURCE,
  SPUTNIK_SOURCE,
};
