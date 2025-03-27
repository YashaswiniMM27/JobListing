import React from 'react';
import '../styles/jobCard.css';

function JobCard({ job }) {
    return (
        <div className="jobItem">
        <h3>{job.title}</h3>
        <p>{job.body}</p>
        </div>
    );
}

export default JobCard;