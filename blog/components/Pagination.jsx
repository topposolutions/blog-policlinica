import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({ posts, postsPerPage, handlePageClick }) {
  return (
    <div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={posts.length / postsPerPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'flex items-center justify-center'}
        pageClassName={
          'border w-8 h-8 rounded-md text-align mx-1 cursor-pointer flex items-center justify-center'
        }
        previousClassName={
          'bg-blue w-8 h-8 rounded-md text-align mx-1 cursor-pointer flex items-center justify-center text-white'
        }
        nextClassName={
          'bg-blue w-8 h-8 rounded-md text-align mx-1 cursor-pointer flex items-center justify-center text-white'
        }
        previousLinkClassName={
          'bg-blue w-8 h-8 rounded-md text-align mx-1 cursor-pointer flex items-center justify-center text-white'
        }
        nextLinkClassName={
          'bg-blue w-8 h-8 rounded-md text-align mx-1 cursor-pointer flex items-center justify-center text-white'
        }
        breakLinkClassName={
          'border text-gray w-8 h-8 rounded-md text-align mx-1 cursor-pointer flex items-center justify-center  '
        }
        activeClassName={'bg-blue text-white'}
      />
    </div>
  )
}

export default Pagination
