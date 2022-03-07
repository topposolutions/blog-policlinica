import Head from 'next/head'

import Banner from '../components/Banner'
import Pagination from '../components/Pagination'

import { Post as PostType } from '../typings'
import { sanityClient } from '../sanity'

import { useState } from 'react'
import { Post } from '../components/Post'

interface Props {
  posts: [PostType]
}
interface Selected {
  selected: number
}

export default function Home({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const indexOfLastPost = currentPage * postsPerPage
  const indexofFistPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFistPost, indexOfLastPost)

  const handlePageClick = ({ selected }: Selected) =>
    setCurrentPage(selected + 1)

  return (
    <div className="mx-auto max-w-6xl">
      <Head>
        <title>Policlínica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <h3 className="px-4 text-3xl font-medium text-gray-600 md:text-4xl xl:px-2">
        Artigos
      </h3>

      <div>
        <Post currentPosts={currentPosts} />
      </div>

      {currentPosts.length && (
        <Pagination
          posts={posts}
          postsPerPage={postsPerPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = ` 
  *[_type =="post"]{
    _id,
    title,
    slug,
    author ->{
     name,
     image
  },
  categories[0]->{
      _id,
      _type,
      }, 
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: { posts },
  }
}

{
  /* {currentPosts?.map((post) => (
         
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full  object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()!}
                alt=" "
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    {checkIfTheTitleIsToBig(post.title)}
                  </p>
                  <p className="text-sx text-gray-600">
                    {checkIfTheDescIsToBig(post.description)}
                  </p>
                </div>

                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))} */
}
