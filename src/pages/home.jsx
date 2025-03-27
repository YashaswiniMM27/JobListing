import React, { useEffect } from 'react'
import '../styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getJobListings } from '../services/jobService';
import { setError, setJobs, setLoading } from '../store/jobSlice';
import JobCard from '../components/jobCard';

function Home() {

    const dispatch = useDispatch();
    const {jobs, loading, error} = useSelector((state) => state.job);

    useEffect(() => {
        const fetchJobs = async () => {
            dispatch(setLoading(true));
            try{
                const data = await getJobListings();
                dispatch(setJobs(data));
            }
            catch (error){
                dispatch(setError('Failed to detch jobs'));
            }
            finally{
                dispatch(setLoading(false));
            }
        };

        fetchJobs();
    }, [dispatch])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='home'>
            <div className='listingHeader'>Job Listings</div>
            <div className='jobLists'>
                {jobs.length === 0 ? (
                    <div>Oops! No jobs available at the moment. Try again aer sometime.</div>
                        ) : (
                            jobs.map((job) => (
                                <JobCard key={job.id} job={job}/>
                            ))
                        )}
            </div>
        </div>
    )
}

export default Home