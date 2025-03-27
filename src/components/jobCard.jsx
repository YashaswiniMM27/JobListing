import React from 'react';
import '../styles/jobCard.css';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
    return (
            <div className="jobItem">
            <Link to={`/job-details/${job.id}`} style={{ textDecoration: 'none' }}>
                <h3>{job.title}</h3>
                <p>{job.body}</p>
            </Link>
            </div>
    );
}

export default JobCard;