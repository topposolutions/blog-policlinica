import Link from 'next/link'
import React, { useState } from 'react'

const DropDownMenu = ({ categories }) => {
  const [showOptions, setOptions] = useState(false)

  // className="flex h-10  w-screen items-center justify-end "

  return (
    <div className="flex h-10  w-screen items-center justify-end ">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setOptions(!showOptions)}
            type="button"
            className="inline-flex w-full justify-center rounded-md border-none border-gray-300 bg-white py-2 text-base text-blue hover:bg-gray-50  focus:outline-none"
          >
            Categorias
            <svg
              className="-mr-1 mt-[3px] h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {showOptions && ( 
          <div
            onMouseLeave={() => setOptions(!showOptions)}
            className="absolute right-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1" role="none">
              {categories?.map((category) => (
                <ul className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue hover:text-white">
                  <Link
                    href={`/category/${category?.title}`}
                    key={category?.title}
                  >
                    <li>{category?.title}</li>
                  </Link>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link href={'/contato/entre-em-contato-conosco'}>
        <h3 className="ml-5 hidden cursor-pointer rounded-full border border-blue px-4 py-1 text-sm text-blue md:inline-flex md:text-base">
          Contato
        </h3>
      </Link>
    </div>
  )
}

export default DropDownMenu
