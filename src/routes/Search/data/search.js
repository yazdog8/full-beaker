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
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    setSearchData: (state, { payload }) => {
      state.currentSearch.data = payload;
    },
    saveSearchVariables: (state, { payload: { keyword, category } }) => {
      state.currentSearch.searchVariables = {
        keyword,
        category,
      };
    },
    clearSearchVariables: (state) =>
      (state.currentSearch.searchVariables =
        searchInitialState.currentSearch.searchVariables),
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { name, actions, reducer } = searchSlice;
export default searchSlice.reducer;
