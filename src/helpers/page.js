const getPaginatedUrl = (source, pageIndex) => {
  const { baseUrl, searchQuery, searchSuffix } = source;

  if (!pageIndex) return `${baseUrl}${searchQuery}`;

  if (!searchSuffix) return `${baseUrl}${searchQuery}${pageIndex}`;

  return `${baseUrl}${searchQuery}${pageIndex}${searchSuffix}`;
};

module.exports = { getPaginatedUrl };
