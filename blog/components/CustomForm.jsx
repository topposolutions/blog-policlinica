import React, { useEffect, useState } from 'react'

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (status === 'success' && sent) setEmail('')
  }, [])

  const validateEmail = (email) => {
    const isEmail = /\S+@\S+\.\S+/
    return isEmail.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) return

    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      })
    setSent(true)
  }

  const onChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="mt-5 w-full rounded-lg border-2 px-10 py-5">
      <div className="text-center">
        <h5 className="text-lg font-light">Newsletter</h5>
        <span className="text-xs text-gray-500">
          <h3>Inscreva-se e fique por dentro.</h3>
        </span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <label className="text-sm text-gray-700" htmlFor="email">
          Email address
        </label>

        {status === 'sending' && (
          <div className="text-cyan-500">Enviando...</div>
        )}
        {status === 'error' && (
          <div
            className="text-red-500"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            className="text-blueOnHover"
            dangerouslySetInnerHTML={{ __html: 'Obrigado por se inscrever!' }}
          />
        )}

        <input
          onChange={onChangeHandler}
          value={email}
          required
          className="border-b-1 border-black  py-2 text-sm outline-none"
          type="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
        />
        <button
          type="submit"
          className="focus:shadow-outline mt-2  cursor-pointer   
          rounded-lg border-2 border-none bg-blue
              px-1 py-2 text-sm
              font-bold   text-white shadow transition duration-150  hover:bg-blueOnHover focus:outline-none   active:scale-90
              "
        >
          Inscreva-se
        </button>
      </form>
    </div>
  )
}

export default CustomForm
