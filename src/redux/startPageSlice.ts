import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StartFrom {
  name: string;
  surname: string;
  age: string;
  select1: string;
  select2: string;
}

interface InitialState {
  dataForm: StartFrom;
}

const initialState: InitialState = {
  dataForm: {
    name: "",
    surname: "",
    age: "",
    select1: "",
    select2: "",
  },
};

const startPageSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    setForm(state, action: PayloadAction<StartFrom>) {
      state.dataForm = action.payload;
    },
  },
});

export const { setForm } = startPageSlice.actions;
export default startPageSlice.reducer;
