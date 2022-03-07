import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { sanityClient } from '../../sanity'
import DropDownMenu from './DropDownMenu'

const NavbarCoppy = () => {
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
    <nav className="mx-auto flex max-w-6xl justify-between p-2 px-5 xl:px-0  ">
      <div className="flex w-[100%] items-center space-x-14">
        <Link href="/">
          <img
            className="w-36 cursor-pointer object-contain"
            src={'/Logo_v1.png'}
            alt="logo"
          />
        </Link>
        <div className="hidden md:inline-flex ">
          <ul className="hidden items-center space-x-5 md:inline-flex">
            <li>
              <Link passHref href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link passHref href={`/policlinica/about`}>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <DropDownMenu categories={categories} />
    </nav>
  )
}

export default NavbarCoppy
