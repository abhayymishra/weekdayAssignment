import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const JobCardListSlice = createSlice({
  name: "jobListCard",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
});

export default JobCardListSlice.reducer;
