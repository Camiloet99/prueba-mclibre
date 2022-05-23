import { ITEMS_SEARCH, ITEMS_DETAILS } from "./../constants/ApiEndpoints"

export async function getProductsBySearch(search) {
  const response = fetch(`${ITEMS_SEARCH}${search}`).then((res) => res.json());
  return response;
}

export async function getProductDetailsById(productId) {
  const response = fetch(`${ITEMS_DETAILS}${productId}`).then((res) => res.json());
  return response;
}
