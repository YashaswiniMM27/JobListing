import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobDetails, postJobApplication } from "../services/jobService";
import { selectJob, setLoading, setError } from "../store/jobSlice";
import '../styles/jobApplication.css'
import { Link } from "react-router-dom";

    const JobApplication = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { selectedJob, loading, error } = useSelector((state) => state.job);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [coverLetter, setCoverLetter] = useState("");

    useEffect(() => {
        const fetchJobDetails = async () => {
        dispatch(setLoading(true));
        try {
            const response = await getJobDetails(id);
            dispatch(selectJob(response));
        } catch (err) {
            dispatch(setError("Failed to fetch job details"));
        } finally {
            dispatch(setLoading(false));
        }
        };
        fetchJobDetails();
    }, [id, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const applicationData = {
        name,
        email,
        coverLetter,
        jobId: id,
        };

        try {
        await postJobApplication(applicationData);
        alert("Application submitted successfully!");
        navigate("/");
        } catch (err) {
        dispatch(setError("Failed to submit application"));
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
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
                
                <button className="submitBtn" type="submit">Submit Application</button>
            </form>
            </>
        )}
        </div>
        </div>
        
    );
};

    export default JobApplication;
