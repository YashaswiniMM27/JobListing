import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";

// Configure and create the Redux store
const store = configureStore({
    reducer: {
        job: jobReducer,  // Add the job slice reducer to manage job-related state
    },
});

export default store; // Export the configured store to be used in the app