export async function getProductsBySearch(search) {
  const response = fetch(`/api/items?q=${search}`).then((res) => res.json());
  return response;
}
