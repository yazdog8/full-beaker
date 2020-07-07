import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = {
  currentSearch: {
    data: [],
    searchVariables: {
      keyword: "",
      category: "",
    },
  },
  savedItems: [],
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
    clearSearchVariables: (state) => {
      state.currentSearch = searchInitialState.currentSearch;
    },
    clearSavedItems: (state) => {
      state.currentSearch.data.map((item) => (item.isSaved = false));
      state.savedItems = [];
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setItemSaved: (state, { payload }) => {
      state.currentSearch.data[payload].isSaved = true;
    },
    setSavedItem: (state, { payload }) => {
      state.savedItems.push(payload);
    },
  },
});

export const { name, actions, reducer } = searchSlice;
export default searchSlice.reducer;
