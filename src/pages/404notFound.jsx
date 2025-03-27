import React from 'react'
import '../styles/errorPage.css'
import { Link } from 'react-router-dom'

/*
 * ErrorPage component displayed for undefined routes (404).
 * Displays an error GIF and a link to navigate back to the homepage.
 */
function ErrorPage() {
    return (
        <div className='errorPage'>
            <Link to='/'>
            <img src="/assets/error.gif" alt="404" />
            </Link>
        </div>
    )
}

export default ErrorPage