import React from 'react'

import { FiMapPin } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'

import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'

const YOUR_SERVICE = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID
const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID
const YOUR_USER_ID = process.env.NEXT_PUBLIC_YOUR_USER_ID

const Contact = () => {
  const formRef = useRef(null)
  const [done, setDone] = useState(false)

  const [values, setValues] = useState({
    from_name: '',
    from_email: '',
    message: '',
    assunto: '',
  })
  const handleChange = (name) => (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const isFormValid = () => {
    if (
      !values.from_name ||
      !values.from_email ||
      !values.message ||
      !values.assunto
    ) {
      return false
    } else {
      return true
    }
  }

  const sendEmail = (e) => {
    console.log(e.target)
    emailjs
      .sendForm(YOUR_SERVICE, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
          setDone(false)
        }
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isFormValid()) {
      console.log('Inválido! Falta algo')
    } else {
      sendEmail(e)
    }
  }

  return (
    <div className="mx-auto mt-2 h-full max-w-6xl px-5 xl:px-0">
      <img
        className="h-48 w-[100%] cursor-pointer object-cover md:h-96"
        src="/contato2.jpg"
        alt="contato"
      />
      <div className="mx-auto w-28 text-center">
        <h3 className="mt-5 border-b-2 border-blue py-1  text-2xl font-medium text-blue md:text-3xl">
          Contato
        </h3>
      </div>

      <div className="mt-5 sm:flex ">
        <div className="flex flex-1  flex-col gap-10">
          <div className="flex">
            <FiMapPin
              className="rounded-full bg-buttoncolor  p-2 text-blue "
              size="40px"
            />
            <div className="ml-3">
              <h3>Localização:</h3>
              <span className="text-sm font-extralight   text-gray-600">
                Rua das flores 100, Bocaiúva-MG, 39390-000
              </span>
            </div>
          </div>
          <div className="flex">
            <AiOutlineMail
              className="rounded-full bg-buttoncolor p-2 text-blue"
              size="40px"
            />
            <div className="ml-3">
              <h3>Email:</h3>
              <span className="text-sm font-extralight text-gray-600">
                policlinica@gmail.com
              </span>
            </div>
          </div>
          <div className="flex">
            <BsPhone
              className="rounded-full bg-buttoncolor p-2 text-blue"
              size="40px"
            />
            <div className="ml-3">
              <h3>Whatsapp:</h3>
              <span className="text-sm font-extralight text-gray-600">
                Rua das flores 100, Bocaiúva-MG, 39390-000
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-2 flex-col text-center"
          ref={formRef}
        >
          <div className="mt-10  sm:mt-0 md:flex">
            <label className="mb-5 block flex-1 md:pr-4">
              <input
                onChange={handleChange()}
                className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none  ring-blue focus:ring"
                placeholder="Seu Nome"
                type="text"
                name="from_name"
                id="from_name"
                value={values.from_name}
              />
            </label>

            <label className="mb-5 block flex-1  md:pl-4">
              <input
                onChange={handleChange()}
                className="form-input mt-1 block w-full rounded border  py-2 px-3   shadow outline-none  ring-blue focus:ring"
                placeholder="E-mail"
                type="email"
                name="from_email"
                id="from_email"
                value={values.from_email}
              />
            </label>
          </div>
          <label className="mb-5 block">
            <input
              onChange={handleChange()}
              className="form-input mt-1 block w-full rounded border  py-2 px-3   shadow outline-none  ring-blue focus:ring"
              placeholder="Assunto"
              type="text"
              name="assunto"
              id="assunto"
              value={values.assunto}
            />
          </label>

          <label className="mb-5 block">
            <textarea
              onChange={handleChange()}
              className="form-textarea mt-1 block w-full resize-none rounded border py-2 px-3 shadow outline-none ring-blue focus:ring"
              placeholder="Mensagem"
              rows={4}
              name="message"
              id="message"
              value={values.message}
            />
          </label>

          <input
            className="focus:shadow-outline mx-auto   cursor-pointer rounded bg-blue py-2 px-10 font-bold text-white shadow hover:bg-blueOnHover focus:outline-none"
            type="submit"
            value="Enviar"
          />
          {done && (
            <p className="mt-3 text-lg text-blue">
              E-mail enviado com sucesso!
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
