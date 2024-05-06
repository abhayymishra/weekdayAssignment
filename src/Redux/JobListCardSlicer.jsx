import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobData = createAsyncThunk(
  "fetchJobData",
  async ({ limit, offset }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit,
      offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to fetch job data");
      }
      const result = await response.json();
      console.log(result);
      return { data: result, totalCount: result.totalCount };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const JobCardListSlice = createSlice({
  name: "jobListCard",
  initialState: {
    isLoading: false,
    data: [],
    hasMore: true,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchJobData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.data.jdList];
      state.hasMore = action.payload.totalCount > state.data.length;
    });
    builder.addCase(fetchJobData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default JobCardListSlice.reducer;
