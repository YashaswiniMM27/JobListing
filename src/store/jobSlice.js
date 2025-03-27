import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    selectedJob: null,
    loading: false,
    error: null,
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        selectJob: (state, action) => {
            state.selectedJob = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setJobs, selectJob, setLoading, setError } = jobSlice.actions;
export default jobSlice.reducer;