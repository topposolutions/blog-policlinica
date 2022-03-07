import React from 'react'
import { IoIosGitNetwork } from 'react-icons/io'

const About = () => {
  return (
    <div className="mx-auto max-w-6xl ">
      <div>
        <div className="mx-auto w-36 text-center ">
          <h3 className="mt-5 border-b-2 border-blue py-1  text-2xl font-medium text-blue md:text-3xl">
            Sobre nós
          </h3>
        </div>
        <div className="mt-10   grid grid-cols-1 space-x-5 px-5 md:grid-cols-3 xl:px-0  ">
          <img
            className="mr-14 
          h-48 w-full rounded-xl object-cover md:h-96 md:w-96 "
            src="/about1.jpg"
            alt="sobre empresa"
          />

          <h4 className="mr-0 mt-5 text-lg font-light  md:col-span-2 md:mr-28 md:mt-0 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h4>
        </div>

        <div className="mx-5  mt-10 flex items-center justify-center  rounded-lg bg-blue py-4 text-center text-2xl font-medium text-white xl:py-8 xl:mx-0">
          <IoIosGitNetwork
            className="rounded-full bg-buttoncolor p-2 text-blue"
            size="40px"
          />
          <div className="ml-3">
            <span className="font-medium text-white">Áreas De Atuação</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
