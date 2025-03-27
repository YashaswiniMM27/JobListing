import { getJobListings, getJobDetails, postJobApplication } from '../services/jobService';  // Import API service functions
import { setJobs, selectJob, setLoading, setError } from '../store/jobSlice';  // Import Redux actions

// Function to fetch and dispatch job listings
export const fetchJobListings = () => async (dispatch) => {
    dispatch(setLoading(true));  // Set loading state to true
    try {
        const jobs = await getJobListings();  // Fetch job listings from API
        dispatch(setJobs(jobs));  // Dispatch the jobs to Redux store
    } catch (error) {
        dispatch(setError('Failed to fetch job listings'));  // Dispatch error to Redux store
    } finally {
        dispatch(setLoading(false));  // Set loading state to false after request is completed
    }
};

// Function to fetch and dispatch selected job details
export const fetchJobDetails = (id) => async (dispatch) => {
    dispatch(setLoading(true));  // Set loading state to true
    try {
        const jobDetails = await getJobDetails(id);  // Fetch job details by id from API
        dispatch(selectJob(jobDetails));  // Dispatch the job details to Redux store
    } catch (error) {
        dispatch(setError(`Failed to fetch job details for ID: ${id}`));  // Dispatch error to Redux store
    } finally {
        dispatch(setLoading(false));  // Set loading state to false after request is completed
    }
};

// Function to submit a job application
export const submitJobApplication = (applicationData) => async (dispatch) => {
    dispatch(setLoading(true));  // Set loading state to true
    try {
        await postJobApplication(applicationData);  // Submit the job application
        alert('Application submitted successfully!');  // Alert user on success
    } catch (error) {
        dispatch(setError('Failed to submit job application'));  // Dispatch error to Redux store
    } finally {
        dispatch(setLoading(false));  // Set loading state to false after request is completed
    }
};