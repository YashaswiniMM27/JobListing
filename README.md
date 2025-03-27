# Job Listings Application

A React-based web application to display job listings with features like pagination, loading and error handling, and smooth scrolling for pagination. It allows users to view job listings, navigate through pages, and submit job applications.

---

## Table of Contents

1. [Features Implemented](#features-implemented)
2. [Steps to Run the Project](#steps-to-run-the-project)
3. [Additional Improvements](#additional-improvements)
4. [Future Enhancements](#future-enhancements)

---

## Features Implemented

- **Job Listings Display**: Fetches and displays job listings from an API.
- **Pagination**: Allows users to navigate through job listings with next and previous page buttons. Pagination works smoothly with the addition of a scroll-to-top feature when the page is changed.
- **Loading & Error Handling**: Displays a loading spinner while fetching data, and shows error messages in case of failure.
- **Job Details View**: Clicking on a job listing navigates the user to a detailed view of that job.
- **Job Application**: Users can apply to jobs directly via a job application form.
- **Responsive Design**: The app is fully responsive and works well on both mobile and desktop devices.
- **Custom Styling**: Custom CSS is used to style the job listing page, pagination, and job details.

---

## Steps to Run the Project

1. **Clone the Repository**:
   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/job-listings-app.git

2. **Install Dependencies: Navigate to the project directory and install the dependencies**:

    cd job-listings-app
    npm install

3. **Run the Application: Start the development server to run the project**:

    npm start


    This will start the application on http://localhost:3000.

    Open in Browser: Open a browser and go to http://localhost:3000 to see the application in action.


    ## Additional Improvements
    Back Button: Added a back button in the job details page that allows users to return to the job listings page.

    Smooth Scrolling: The pagination buttons smoothly scroll the page to the top whenever the page changes, improving the user experience.

    Open About Page in a New Tab: Implemented the functionality where the About page is opened in a new tab when clicking on the "About" link in the navigation menu.

    Job Card Components: Each job card is styled to look appealing and easy to read. The cards have hover effects that provide users with a better interactive experience.

    Loading Spinner: A simple loading spinner is displayed while the job listings are being fetched, giving users clear feedback that data is being loaded.

    Error Handling: If there’s an issue with fetching the job listings, a user-friendly error message is shown to the user.

    Pagination UI Enhancements: Pagination buttons have been styled to highlight the active page and are disabled for the first and last page buttons where applicable.

    GIFs 404 page: Added GIFs for the 404 page for a fun User Interface.



    ## Future Enhancements
    Search and Filter: Add search functionality and filters to allow users to filter job listings based on criteria like location, job type, etc.

    User Authentication: Add user authentication so that users can save their job applications and have a personal dashboard.

    Job Categories: Add job categories (e.g., Full-Time, Part-Time, Remote) to allow users to filter job listings by type.

    Infinite Scrolling: Implement infinite scrolling for a smoother experience when navigating through a large number of job listings.



    ## Technologies Used
    Frontend: React, Redux Toolkit, React Router

    Styling: CSS3 (Custom Styling), Responsive Design with Media Queries

    State Management: Redux Toolkit
