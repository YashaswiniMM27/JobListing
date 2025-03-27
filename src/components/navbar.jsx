import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <header className='navbar'>
            <div className='title'>
            <Link to='/' onClick={() => window.scrollTo({top: 0, behavior: "smooth" })}>
                    <img src="/assets/Favicon.png" alt="Logo" />
            </Link>
            <Link to='/' className='titleText' onClick={() => window.scrollTo({top: 0, behavior: "smooth" })}>JobSphere</Link>
            </div>
            <div className='about'  onClick={() => window.open('/about', '_blank')}>About</div>
        </header>
    )
}

export default Navbar