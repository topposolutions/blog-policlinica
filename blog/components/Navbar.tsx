import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { sanityClient } from '../sanity'

const HeaderCoppy = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fecthCategories = async () => {
      try {
        const query = `*[_type == "category"]`
        const categories = await sanityClient.fetch(query)
        setCategories(categories)
      } catch (error) {
        console.log({ message: error })
      }
    }
    fecthCategories()
  }, [])

  return (
    <>
      <header className="mx-auto flex max-w-6xl justify-between p-2">
        <div className="flex items-center space-x-14 px-5 xl:px-0">
          <Link href="/">
            <img
              className="w-36 cursor-pointer object-contain"
              src={'/Logo_v1.png'}
              alt="logo"
            />
          </Link>

          <nav className="hidden md:inline-flex">
            <ul className="hidden items-center space-x-5 md:inline-flex">
              <li>
                <Link href="/">
                  <a href="">Home</a>
                </Link>
              </li>
              <li>
                <Link href={`/policlinica/about`}>
                  <a className="cursor-pointer">Sobre</a>
                </Link>
              </li>

              {/* <li className="rounded-full bg-blue px-4 py-1 text-white">
              <a href="#">Contato</a>
            </li> */}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-2 pr-5 text-blue md:space-x-5 xl:pr-0">
          {/* <h3 className="cursor-pointer">Categorias</h3>
          <Link href="/">
            <img
              className="w-3 cursor-pointer object-contain text-blue"
              src={'/arrow_down_v2.svg'}
              alt="logo"
            />
          </Link> */}

          <div className="relative top-4">
            <div className="top-3 left-0 flex w-[100%]">
              <h3 className="ml-auto cursor-pointer">Categorias</h3>
              <Link href="/">
                <img
                  className="w-3 cursor-pointer object-contain text-blue"
                  src={'/arrow_down_v2.svg'}
                  alt="logo"
                />
              </Link>
            </div>
            {categories?.map((category) => {
              return (
                <ul className=" cursor-pointer   bg-blue px-5  text-center text-sm text-white md:text-base">
                  <Link
                    href={`/category/${category?.title}`}
                    key={category?.title}
                  >
                    <li>{category?.title}</li>
                  </Link>
                </ul>
              )
            })}
          </div>

          {/* <h3 className="cursor-pointer rounded-full border border-blue px-4 py-1 text-sm md:text-base">
            Contato
          </h3> */}
        </div>
      </header>
    </>
  )
}

export default HeaderCoppy
