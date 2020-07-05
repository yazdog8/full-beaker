import { actions } from "./search";
import { getSearchData } from "common/http/data/searchHttp";

export function returnSearchData(keyword = "", category = "") {
  return async (dispatch) => {
    dispatch(actions.saveSearchVariables({ keyword, category }));
    const response = await getSearchData(keyword, category);
    console.log(response);
  };
}
