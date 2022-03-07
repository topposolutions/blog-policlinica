import Link from 'next/link'
import { urlFor } from '../sanity'

interface Props {
  post: []
}

export const Post = ({ currentPosts }: Props) => {
  const checkIfTheTitleIsToBig = (title: string) => {
    const sortString = `${title?.slice(0, 50)}...`
    return `${title?.length > 50 ? sortString : title}`
  }

  const checkIfTheDescIsToBig = (title: string) => {
    const sortString = `${title?.slice(0, 40)}...`
    return `${title?.length > 40 ? sortString : title}`
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3 ">
        {currentPosts?.map((post) => (
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
        ))}
      </div>
    </>
  )
}
