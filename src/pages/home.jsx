import React from 'react'
import '../styles/home.css'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    const dispatch = useDispatch();
    const {jobs, loading, error} = useSelector((state) => state.job)

    return (
        <div className='home'>Home</div>
    )
}

export default Home