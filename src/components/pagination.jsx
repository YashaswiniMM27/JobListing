import React, { useEffect } from 'react'
import '../styles/pagination.css'

/*
 * Pagination component for navigating through job listings pages.
 * Displays page numbers and "Previous" and "Next" buttons.
 */
function Pagination({currentPage, totalPages, onPageChange}) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);


    function handlePageChange(pageNumber){
        if(pageNumber >= 1 && pageNumber <= totalPages){
            onPageChange(pageNumber);
        }
    }

    return (
        <div className='pagination'>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;
