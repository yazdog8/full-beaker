import { createSlice } from "@reduxjs/toolkit";

const searchInitialState = {
  currentSearch: {
    data: [],
  },
  savedSearches: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    setSearchData: (store, { payload }) => console.log(payload),
  },
});

export const { name, actions, reducer } = searchSlice;
export default searchSlice.reducer;
