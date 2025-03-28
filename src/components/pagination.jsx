import React, { useEffect, useState } from 'react'
import '../styles/pagination.css'

/*
 * Pagination component for navigating through job listings pages.
 * Displays page numbers and "Previous" and "Next" buttons.
 */
function Pagination({currentPage, totalPages, onPageChange}) {

    const [maxVisiblePages, setMaxVisiblePages] = useState(7);

    useEffect(() => {
        // Update max visible pages based on screen width
        const handleResize = () => {
            setMaxVisiblePages(window.innerWidth <= 600 ? 3 : 7); // Show 3 pages on mobile, 7 on larger screens
        };

        handleResize();
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

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

    // Determine page numbers to display
        const getVisiblePages = () => {
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
    
            return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        };

    return (
        <div className='pagination'>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>

                {getVisiblePages().map((page) => (
                    <button
                        key={page}
                        className={currentPage === page ? 'active' : ''}
                        onClick={() => handlePageChange(page)}
                    >
                    {page}
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
