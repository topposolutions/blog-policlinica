import React from 'react'
import MailchimpFormContainer from './MailchimpFormContainer'


const Footer = () => {
  return (
    <div className="bg   mx-auto   grid max-w-6xl grid-cols-1 py-10 px-5 md:grid-cols-2">
      <div className="mt-5 flex flex-col justify-end">
        <h4 className="cursor-pointer text-2xl   font-semibold md:text-3xl">
          Policlínica
        </h4>
        <span className="text-sm text-gray-500">
          Copyrights © 2022 - All Rights Reserved.
        </span>
        <span className="text-sm text-gray-500">Developed by Toppo.</span>
      </div>

      <MailchimpFormContainer />
    </div>
  )
}
export default Footer
