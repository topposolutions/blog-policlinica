import React, { Children, useRef, useState } from 'react'

import { sanityClient, urlFor } from '../../sanity'
import { Post as PostType } from '../../typings'
import { GetStaticProps } from 'next'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
 
interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: PostType
}

const Post = ({ post }: Props) => {
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const commentRef = useRef(null)

  const {
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch(`/api/createComment`, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  const sendCommentHandler = (e) => {
    e.preventDefault()
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const comment = commentRef.current?.value

    if (!name || !email || !comment) return

    const newCommentUserData = {
      _id: post._id,
      name,
      email,
      comment,
    }

    onSubmit(newCommentUserData)
  }

  return (
    <main>
      <img
        src={urlFor(post?.mainImage).url()!}
        className="h-40 w-full object-cover"
        alt=""
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post?.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500 ">
          {post?.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full "
            src={urlFor(post?.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by <span className="text-blue"> {post?.author.name}</span>{' '}
            - Publicado em {new Date(post?._createdAt).toLocaleString()}
          </p>
        </div>

        <div className="mt-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc"> {children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>

      <hr className="my-5 mx-auto max-w-lg  border border-blue" />
      {submitted ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col bg-yellow-500 p-10 text-white">
          <h3 className="text-3xl font-bold">Obrigado por comentar!</h3>
          <p>
            Seu comentário estará visível assim que aprovado pela moderação.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => sendCommentHandler(e)}
          className=" my-10 mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-sm text-blue">Gostou do artigo?</h3>
          <h4 className="text-3xl font-bold">Deixe seu comentário abaixo!</h4>
          <hr className=" mt-2 py-3" />

          <label className="mb-5 block">
            <span className="text-gray-700">Nome</span>
            <input
              ref={nameRef}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none  ring-blue focus:ring"
              placeholder="John appleseed"
              type="text"
              name=""
              id=""
            />
          </label>

          <label className="mb-5 block">
            <span className="text-700">Email</span>
            <input
              ref={emailRef}
              className="form-input mt-1 block w-full rounded border  py-2 px-3   shadow outline-none  ring-blue focus:ring"
              placeholder="exemplo@gmail.com"
              type="email"
              name=""
              id=""
            />
          </label>

          <label className="mb-5 block">
            <span className="text-700">Comentário</span>
            <textarea
              ref={commentRef}
              className=" form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-blue focus:ring"
              placeholder="Escreva seu comentário"
              rows={8}
              name=""
              id=""
            />
          </label>
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500"> - Nome é obrigatório!</span>
            )}
            {errors.comment && (
              <span className="text-red-500">- Comentário é obrigatório!</span>
            )}
            {errors.email && (
              <span className="text-red-500"> - Email é obrigatório!</span>
            )}
          </div>

          <input
            className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
            type="submit"
            value="Postar"
          />
        </form>
      )}
      {/* COMMENTS */}

      {post?.comments.length ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10  shadow">
          <h3 className="text-4xl">Comentários</h3>
          <hr className="pb-2 " />
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <div className="flex items-center">
                <p>
                  <span className="text-yellow-500">{comment.name} </span>{' '}
                </p>
                <span className="ml-2 text-xs font-extralight">
                  {' '}
                  Publicado em {new Date().toLocaleString().split(',')[0]}
                </span>
              </div>
              <p className=" text-gray-700">{comment.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center text-xl text-gray-400">
          Seja o primeiro a comentar.
        </h3>
      )}
    </main>
  )
}

//this function tell nextjs witch route to be rendered in advance
export const getStaticPaths = async () => {
  const query = `
  *[_type=="post"]{
    _id,
    slug{
      current 
    }
  }
  `

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: PostType) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type == "post" && slug.current == $slug][0] {
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

  const post = await sanityClient.fetch(query, { slug: params?.slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 120, //That means after 120sec, it'll update the old cached version
  }
}

export default Post
