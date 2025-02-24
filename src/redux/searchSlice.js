import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload; // `query`-ni yenilə
    },
  },
});

export const { setQuery } = searchSlice.actions; // setQuery-ni export edirik
export default searchSlice.reducer; // Reducer-i default export edirik
