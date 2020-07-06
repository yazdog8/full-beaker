import { actions } from "./search";
import { getSearchData } from "common/http/data/searchHttp";

export function returnSearchData(keyword = "", category = "") {
  return async (dispatch) => {
    dispatch(actions.setIsLoading(true));
    dispatch(actions.saveSearchVariables({ keyword, category }));
    await getSearchData(keyword, category)
      .then(({ hits }) => {
        const data = hits.map((hit) => ({ ...hit, isSaved: false }));
        dispatch(actions.setSearchData(data));
      })
      .finally(() => dispatch(actions.setIsLoading(false)));
  };
}
