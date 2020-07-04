import { actions } from "./search";
import { getSearchData } from "common/http/data/searchHttp";

export function returnSearchData() {
  return async (dispatch) => {
    const response = await getSearchData();
    console.log(response);
  };
}
