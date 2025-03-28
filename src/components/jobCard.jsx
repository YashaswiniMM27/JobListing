import React from 'react';
import '../styles/jobCard.css';
import { Link } from 'react-router-dom';

/*
 * Renders a job card with a title and description.
 * Clicking the card navigates to the job details page.
 */

function JobCard({ job }) {
    return (
            <div className="jobItem">
            <Link className='jobItemContent' to={`/job-details/${job.id}`} style={{ textDecoration: 'none' }}>
                <h3>{job.title}</h3>
                <p>{job.body}</p>
                <button>View Details</button>
            </Link>
            </div>
    );
}

export default JobCard;