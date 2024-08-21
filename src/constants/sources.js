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

const OZODLIK_SOURCE = {
  baseUrl: "https://rus.ozodlik.org/",
  //searchQuery: "s?k=убита&tab=all&pi=",
  //searchQuery: "s?k=найдено+тело+женщины&tab=all&pi=",
  //searchQuery: "s?k=скончалась&tab=all&pi=",
  //searchQuery: "s?k=погибла&tab=all&pi=",
  //searchQuery: "s?k=труп+женщины&tab=all&pi=",
  //searchQuery: "s?k=смерти+избил&tab=all&pi=",
  //searchQuery: "s?k=скончалась+от+полученных+травм&tab=all&pi=",
  //searchQuery: "s?k=убийство+женщины&tab=all&pi=",
  //searchQuery: "s?k=изнасилование+женщины&tab=all&pi=",
  //searchQuery: "s?k=изнасилование+девушки&tab=all&pi=",
  searchQuery: "s?k=умерла&tab=all&pi=",
  searchSuffix: "",
  numberOfPages: 28,
  loadedElement: ".media-block-wrap",
  dataContainer: ".media-block",
  linkSelector: ".media-block > a",
  titleSelector: ".media-block__content .media-block__title",
  dateSelector: ".media-block__content .date",
  descriptionSelector: ".media-block__content .perex" 
};


module.exports = {
  PODROBNO_SOURCE,
  KUNUZ_SOURCE,
  GAZETA_SOURCE,
  UZNEWS_SOURCE,
  NUZ_SOURCE,
  OZODLIK_SOURCE
};
