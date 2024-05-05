// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchJobData = createAsyncThunk("fetchJobData", async () => {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   const body = JSON.stringify({
//     limit: 10,
//     offset: 0,
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body,
//   };

//   try {
//     const response = await fetch(
//       "https://api.weekday.technology/adhoc/getSampleJdJSON",
//       requestOptions
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch job data");
//     }
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// });

// const JobCardListSlice = createSlice({
//   name: "jobListCard",
//   initialState: {
//     isLoading: false,
//     data: [],
//     error: false,
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchJobData.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchJobData.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchJobData.rejected, (state, action) => {
//       state.error = true;
//     });
//   },
// });

// export default JobCardListSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobData = createAsyncThunk(
  "fetchJobData",
  async ({ offset, limit }) => {
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
      return result;
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
    error: false,
    offset: 0,
    limit: 10,
    hasMore: true,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchJobData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.jdList];
       state.offset += state.limit; // update offset
      state.hasMore = action.payload.jdList.length === state.limit;
    });
    builder.addCase(fetchJobData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default JobCardListSlice.reducer;
