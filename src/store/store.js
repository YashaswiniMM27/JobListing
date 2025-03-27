import { configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "./reducers/jobReducer";

const store = configureStore({
    reducer: {
        job: jobReducer,
    }
});

export default store;