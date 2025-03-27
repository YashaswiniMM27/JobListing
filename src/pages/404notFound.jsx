import React from 'react'
import '../styles/errorPage.css'
import { Link } from 'react-router-dom'

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