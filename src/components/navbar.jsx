import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <header className='navbar'>
            <div className='title'>
            <Link to='/'>
                    <img src="/assets/Favicon.png" alt="Logo" />
            </Link>
            <Link to='/' className='titleText'>JobSphere</Link>
            </div>
            <Link to='/about'>
            <div className='about'>About</div>
            </Link>
        </header>
    )
}

export default Navbar