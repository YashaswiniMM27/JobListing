import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import JobCard from '../components/jobCard';
import { fetchJobListings } from '../viewmodel/jobViewModel';
import Pagination from '../components/pagination';

/*
 * Home component displaying job listings with loading and error handling.
 * Fetches job listings from the API and displays them using JobCard components.
 */
function Home() {

    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.job);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

        // Fetch job listings using view-model
    useEffect(() => {
        dispatch(fetchJobListings());
    }, [dispatch]);

    const indexOfLastJob = currentPage * itemsPerPage;
    // Calculate the index of the first job on the current page
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    // Slice the jobs array based on the current page
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Calculate the total number of pages
    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    // Show loading state while fetching jobs
    if (loading) return <div className='loading'>Loading...</div>;

    // Show error message if fetching jobs fails
    if (error) return <div className='error'>{error}</div>;

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='home'>
            <div className='listingHeader'>Job Listings</div>
            <div className='jobLists'>
                {currentJobs.length === 0 ? (
                    <div>Oops! No jobs available at the moment. Try again aer sometime.</div>
                        ) : (
                             // If jobs are available, map through them and display JobCard for each
                            currentJobs.map((job) => (
                                <JobCard key={job.id} job={job}/>
                            ))
                        )}
            </div>

                {/* Add Pagination Component */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
        </div>
    )
}

export default Home