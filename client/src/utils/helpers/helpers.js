export const getMostSearchedCategory = (categories) => {
  const withMaxResults = categories?.reduce(function (prev, current) {
    return prev.results > current.results ? prev : current;
  });
  return withMaxResults;
};
