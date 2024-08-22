/*const getPaginatedUrl = (source, pageIndex) => {
  const { baseUrl, searchQuery, searchSuffix } = source;

  if (!pageIndex) return `${baseUrl}${searchQuery}`;

  if (!searchSuffix) return `${baseUrl}${searchQuery}${pageIndex}`;

  return `${baseUrl}${searchQuery}${pageIndex}${searchSuffix}`;
};

module.exports = { getPaginatedUrl };
*/

const getPaginatedUrl = (source) => {
  const { baseUrl, searchQuery, searchSuffix } = source;

  // Construct the URL without considering the pageIndex
  return `${baseUrl}${searchQuery}${searchSuffix}`;
};

module.exports = { getPaginatedUrl };
