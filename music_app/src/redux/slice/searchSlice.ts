import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TSearchState {
  searchToken: string;
}

const initialState: TSearchState = {
  searchToken: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSeacrhToken: (state, action: PayloadAction<string>) => {
      state.searchToken = action.payload;
    },
  },
});

export const { setSeacrhToken } = searchSlice.actions;
