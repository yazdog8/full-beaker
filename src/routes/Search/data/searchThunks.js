import { actions } from "./search";
import { getSearchData } from "common/http/data/searchHttp";

export function returnSearchData(keyword = "", category = "") {
  return async (dispatch) => {
    dispatch(actions.setIsLoading(true));
    dispatch(actions.saveSearchVariables({ keyword, category }));
    await getSearchData(keyword, category)
      .then(({ hits }) => {
        dispatch(actions.setSearchData(hits));
      })
      .finally(() => dispatch(actions.setIsLoading(false)));
  };
}
