import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/jobDetails.css'
import { Link } from 'react-router-dom';
import { fetchJobDetails } from '../viewmodel/jobViewModel';

/*
 * JobDetails component displays detailed information about a selected job.
 * Fetches job details from the API and handles loading and error states.
 */
function JobDetails() {
    const { id } = useParams(); // Get job id from URL parameters
    const dispatch = useDispatch();  // Dispatch actions to Redux store
    const { selectedJob, loading, error } = useSelector((state) => state.job);  // Get job details, loading, and error states from Redux store

        // Fetch job details when component mounts or job id changes using view-model
    useEffect(() => {
        dispatch(fetchJobDetails(id));
    }, [dispatch, id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <>
            <Link className='back' to="/" style={{ textDecoration: 'none' }}>
                <img className="backBtn" src="/assets/backButton.png" alt="back" />
                <div className="backTxt">Back</div>
            </Link>
            <div className="descriptionBox">
                {selectedJob ? (
                    <div className="jobDescription">
                        <h1>{selectedJob.title}</h1>
                        <p>{selectedJob.body}</p>
                    </div>
                ) : (
                    <div>No job details available</div>
                )}
                <Link className="applyBtnContainer" to={selectedJob ? `/apply/${selectedJob.id}` : "#"}>
                    <button disabled={!selectedJob}>
                        Apply
                    </button>
                </Link>
            </div>
        </>
    );
}

export default JobDetails;
