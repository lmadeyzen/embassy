import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Queries {
  conversationId: string;
  appId: string;
}

interface InitialState {
  queries: Queries;
}

const initialState: InitialState = {
  queries: {
    appId: "",
    conversationId: "",
  },
};

const querySlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<Queries>) {
      state.queries = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
