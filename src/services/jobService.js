import axios from "axios";

// Create an Axios instance with the base URL for API requests
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'// Base URL for API requests
})

// Function to fetch job listings
export const getJobListings = async () => {
    try{
        const response = await api.get('/posts');
        return response.data;
    }
    catch(error){
        throw new Error('Failed to fetch job listings');
    }
}

// Function to fetch details for a specific job by ID
export const getJobDetails = async (id) => {
    try{
        const response = await api.get(`/posts/${id}`);
        return response.data;
    }
    catch(error){
        throw new Error(`Failed to fetch job details for ID: ${id}`);
    }
}

// Function to submit a job application
export const postJobApplication = async (applicationData) => {
    try {
        const response = await api.post("/posts", applicationData);
        return response.data;
    } catch (error) {
        throw new Error("Failed to submit job application");
    }
};
