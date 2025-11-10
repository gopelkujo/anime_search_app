import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  keyword: string;
  page: number;
}

const initialState: HomeState = {
  keyword: "",
  page: 1,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    modifyKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    increasePage: (state) => {
      state.page += 1;
    },
    decreasePage: (state) => {
      state.page -= 1;
    },
  },
});

export const {
  modifyKeyword: modifyKeyword,
  increasePage: increasePage,
  decreasePage: decreasePage,
} = homeSlice.actions;
export default homeSlice.reducer;
