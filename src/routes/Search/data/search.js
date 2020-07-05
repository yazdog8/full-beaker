import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = {
  currentSearch: {
    data: [],
    searchVariables: {
      keyword: "",
      category: "",
    },
  },
  savedSearches: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    setSearchData: (state, { payload }) => console.log(payload),
    saveSearchVariables: (state, { payload: { keyword, category } }) => {
      state.currentSearch.searchVariables = {
        keyword,
        category,
      };
    },
    clearSearchVariables: (state) =>
      (state.currentSearch.searchVariables =
        searchInitialState.currentSearch.searchVariables),
  },
});

export const { name, actions, reducer } = searchSlice;
export default searchSlice.reducer;
