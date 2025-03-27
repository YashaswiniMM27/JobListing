import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getJobListings = async () => {
    try{
        const response = await api.get('/posts');
        return response.data;
    }
    catch(error){
        throw new Error('Failed to fetch job listings');
    }
}

export const getJobDetails = async (id) => {
    try{
        const response = await api.get(`/posts/${id}`);
        return response.data;
    }
    catch(error){
        throw new Error(`Failed to fetch job details for ID: ${id}`);
    }
}

