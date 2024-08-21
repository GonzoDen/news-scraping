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

const UPL_SOURCE = {
  baseUrl: "https://upl.uz/",
  searchQuery: "index.php?do=search&subaction=search&search_start=",
  //searchSuffix: "&full_search=0&story=убита",
  //searchSuffix: "&full_search=0&story=найдено+тело+женщины",
  //searchSuffix: "&full_search=0&story=скончалась",
  //searchSuffix: "&full_search=0&story=погибла",
  //searchSuffix: "&full_search=0&story=труп+женщины",
  //searchSuffix: "&full_search=0&story=смерти+избил",
  //searchSuffix: "&full_search=0&story=скончалась+от+полученных+травм",
  //searchSuffix: "&full_search=0&story=убийство+женщины",
  //searchSuffix: "&full_search=0&story=изнасилование+женщины",
  //searchSuffix: "&full_search=0&story=изнасилование+девушки",
  searchSuffix: "&full_search=0&story=умерла",
  numberOfPages: 1,
  loadedElement: "#content-block", // The main container that ensures the page is fully loaded
  dataContainer: ".sh-news", // Each news item is inside a <div> with class "sh-news"
  linkSelector: ".sh-title a", // The <a> tag inside the <h2> tag that contains the link to the news article
  titleSelector: ".sh-title a", // The same <a> tag inside the <h2> for extracting the title
  dateSelector: ".side-date span:first-child", // The <span> element inside the .side-date div for the date
  descriptionSelector: ".sh-text", // The <div> with class "sh-text" containing the description
};


module.exports = {
  PODROBNO_SOURCE,
  KUNUZ_SOURCE,
  GAZETA_SOURCE,
  UZNEWS_SOURCE,
  NUZ_SOURCE,
  UPL_SOURCE,
};
