import { API_KEY, PER_PAGE } from "../httpConstants";

export async function getSearchData(keyword = "", category = "") {
  const response = await fetch(
    `/api/?key=${API_KEY}&per_page=${PER_PAGE}&q=${keyword}&category=${category}`
  );
  return response.json();
}
