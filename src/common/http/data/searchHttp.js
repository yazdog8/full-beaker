import { API_KEY } from "../httpConstants";

export async function getSearchData() {
  const response = await fetch(`/api/?key=${API_KEY}`);
  return response.json();
}
