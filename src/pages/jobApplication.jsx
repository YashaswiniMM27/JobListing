import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails, postJobApplication } from "../services/jobService";
import { selectJob, setLoading, setError } from "../store/jobSlice";
import '../styles/jobApplication.css'
import { Link } from "react-router-dom";
import { fetchJobDetails } from "../viewmodel/jobViewModel";


/*
 * JobApplication component allows users to apply for a specific job by filling out a form.
 * Fetches job details and handles form submission.
 */
    function JobApplication(){

    const { id } = useParams();// Get job id from the URL
    const navigate = useNavigate(); // Navigation hook to redirect after submission
    const dispatch = useDispatch();// Dispatch actions to Redux store

    const { selectedJob, loading, error } = useSelector((state) => state.job);// Get selected job, loading, and error state

    const [name, setName] = useState("");// State for storing name
    const [email, setEmail] = useState("");// State for storing email
    const [coverLetter, setCoverLetter] = useState("");// State for storing cover letter
    const [resume, setResume] = useState("");// State for storing resume

    // Fetch job details when the component mounts using view-model
    useEffect(() => {
        dispatch(fetchJobDetails(id));
    }, [id, dispatch]);
    

     // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const applicationData = {
            name,
            email,
            coverLetter,
            jobId: id,
        };

        try {
        await postJobApplication(applicationData);// Post application data to API
        alert("Application submitted successfully!");// Show success alert
        navigate("/"); // Redirect to the home page after submission
        } catch (err) {
        dispatch(setError("Failed to submit application")); // Handle submission errors
        }
    };

        // Show loading state while data is being fetched
    if (loading) return <div className="loading">Loading...</div>;

        // Show loading state while data is being fetched
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="FormContainer">
            <Link className='backFromApplication' to={selectedJob ? `/job-details/${selectedJob.id}` : "#"} style={{ textDecoration: 'none' }}>
                    <img className="backBtn" src="/assets/backButton.png" alt="back" />
                    <div className="backTxtApplication">Back</div>
            </Link>
            <div className="jobApplication">
                {selectedJob && (
            <>
            <h1>Apply for {selectedJob.title}</h1>
            <form onSubmit={handleSubmit}>
                <div className="nameField">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                
                <div className="emailField">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                
                <div className="coverLetterField">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                    id="coverLetter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required
                />
                </div>

                <div className="resumeField">
                    <label htmlFor="resume">Upload Resume (PDF only)</label>
                    <input
                        className="resume"
                        type="file"
                        id="resume"
                        accept=".pdf"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                        style={{
                            position: 'absolute',
                            width: '1px',
                            height: '1px',
                            opacity: 0,
                            pointerEvents: 'none',
                        }}
                    />

                    <button
                        type="button"
                        onClick={() => document.getElementById('resume').click()}
                        className="chooseFileBtn"
                    >
                        <img src="/assets/download.png" alt="download" />
                    </button>

                    {resume && <p>{resume.name}</p>}
                </div>

                <button className="submitBtn" type="submit">Submit Application</button>
            </form>
            </>
        )}
        </div>
        </div>
        
    );
};

    export default JobApplication;
