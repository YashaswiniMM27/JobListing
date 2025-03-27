import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJob, setError, setLoading } from '../store/jobSlice';
import { getJobDetails } from '../services/jobService';
import { useParams } from 'react-router-dom';
import '../styles/jobDetails.css'

function JobDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedJob, loading, error } = useSelector((state) => state.job);

    useEffect(() => {
        const fetchJobDetails = async () => {
            dispatch(setLoading(true));
            try {
                const data = await getJobDetails(id);
                dispatch(selectJob(data));
            } catch (err) {
                dispatch(setError('Failed to fetch job details'));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchJobDetails();
    }, [dispatch, id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className='descriptonBox'>
            {selectedJob ? (
                <div className='jobDescription'>
                    <h1>{selectedJob.title}</h1>
                    <p>{selectedJob.body}</p>
                </div>
            ) : (
                <div>No job details available</div>
            )}
            <button className='applyBtn'>Apply</button>
        </div>
    );
}

export default JobDetails;
