import { configureStore } from "@reduxjs/toolkit";
import jobListCardReducer from "./JobListCardSlicer";

export const store = configureStore({
    reducer : {
        jobListCard : jobListCardReducer
    }
});
