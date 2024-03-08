import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateRange {
  startDate: string;
  endDate: string;
}

interface InitialState {
  date: DateRange;
}

const initialState: InitialState = {
  date: {
    endDate: "",
    startDate: "",
  },
};

const pickDateSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    setTravelDate(state, action: PayloadAction<DateRange>) {
      state.date = action.payload;
    },
  },
});

export const { setTravelDate } = pickDateSlice.actions;
export default pickDateSlice.reducer;
