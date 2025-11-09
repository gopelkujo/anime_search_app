import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchFieldState {
  value: string;
}

const initialState: SearchFieldState = {
  value: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    modify: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { modify } = homeSlice.actions;
export default homeSlice.reducer;
