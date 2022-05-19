export async function getProductsBySearch(search) {
  const response = fetch(`/api/items?q=${search}`).then((res) => res.json());
  return response;
}

export async function getProductDetailsById(productId) {
  const response = fetch(`/api/items/${productId}`).then((res) => res.json());
  return response;
}
