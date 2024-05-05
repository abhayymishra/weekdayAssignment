import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobData = createAsyncThunk("fetchJobData", async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});

const JobCardListSlice = createSlice({
  name: "jobListCard",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchJobData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchJobData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default JobCardListSlice.reducer;
