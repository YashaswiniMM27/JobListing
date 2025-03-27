import React, { useEffect } from 'react'
import '../styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import JobCard from '../components/jobCard';
import { fetchJobListings } from '../viewmodel/jobViewModel';

/*
 * Home component displaying job listings with loading and error handling.
 * Fetches job listings from the API and displays them using JobCard components.
 */
function Home() {

    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.job);

        // Fetch job listings using view-model
    useEffect(() => {
        dispatch(fetchJobListings());
    }, [dispatch]);

    // Show loading state while fetching jobs
    if (loading) return <div className='loading'>Loading...</div>;

    // Show error message if fetching jobs fails
    if (error) return <div className='error'>{error}</div>;

    return (
        <div className='home'>
            <div className='listingHeader'>Job Listings</div>
            <div className='jobLists'>
                {jobs.length === 0 ? (
                    <div>Oops! No jobs available at the moment. Try again aer sometime.</div>
                        ) : (
                             // If jobs are available, map through them and display JobCard for each
                            jobs.map((job) => (
                                <JobCard key={job.id} job={job}/>
                            ))
                        )}
            </div>
        </div>
    )
}

export default Home