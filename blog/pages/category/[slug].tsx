import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../sanity'

import { Post } from '../../components/Post'
import Pagination from '../../components/Pagination'

interface Selected {
  selected: number
}
const Category = ({ postsByCategorie, slug }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const indexOfLastPost = currentPage * postsPerPage
  const indexofFistPost = indexOfLastPost - postsPerPage
  const currentPosts = postsByCategorie.slice(indexofFistPost, indexOfLastPost)

  const handlePageClick = ({ selected }: Selected) =>
    setCurrentPage(selected + 1)

  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="px-4 py-2 text-3xl font-medium text-gray-600 md:text-4xl xl:px-2">
        Artigos sobre {slug}
      </h3>
      <Post currentPosts={postsByCategorie} />
      {currentPosts.length > 0 && (
        <Pagination
          posts={currentPosts}
          postsPerPage={postsPerPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  )
}

export const getServerSideProps = async ({ params: { slug } }) => {
  const queryGetCategorieID = `
  *[_type == "category" && title=="${slug}"]
  `
  const categorieID = await sanityClient.fetch(queryGetCategorieID)

  const query = `
  *[_type =="post" && references("${categorieID[0]._id}")]{
    _id,
    _createdAt,
    title,  
    author ->{
      name,
      image
   },
    'comments': *[
      _type =="comment"  &&
      post._ref == ^._id &&
      approved ==true
    ],
 
    description,
    mainImage,
    slug,
    body
  }`
  const postsByCategorie = await sanityClient.fetch(query)
  console.log(postsByCategorie)

  return {
    props: { postsByCategorie, slug },
  }
}

export default Category
