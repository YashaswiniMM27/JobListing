import { createSlice } from "@reduxjs/toolkit";

// Define initial state for job-related data
const initialState = {
    jobs: [],
    selectedJob: null,
    loading: false,
    error: null,
};

// Create slice for job-related state management
const jobSlice = createSlice({
    name: "job",  // Name of the slice
    initialState, // Initial state defined above
    reducers: {
        // Action to set the list of jobs in state
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        // Action to set the selected job in state
        selectJob: (state, action) => {
            state.selectedJob = action.payload;
        },
         // Action to set loading state
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // Action to set error message in state
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Export actions to be used in components
export const { setJobs, selectJob, setLoading, setError } = jobSlice.actions;

// Export reducer to be added to store
export default jobSlice.reducer;