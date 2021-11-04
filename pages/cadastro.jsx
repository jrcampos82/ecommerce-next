/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import validate from '../utils/validate'

const cadastro = () => {
  const initialValue = { nome: '', email: '', password: '', cf_password: '' }

  const [userData, setUserData] = useState(initialValue)

  const { nome, email, password, cf_password } = userData

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errMsg = validate(nome, email, password, cf_password)

    if (errMsg) {
      console.log(errMsg)
    }
  }

  return (
    <div>
      <Head>
        <title>Cadastro de Usuário</title>
      </Head>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNome"
            aria-describedby="emailHelp"
            placeholder="Digite seu nome"
            name="nome"
            value={nome}
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="********"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirme o Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="********"
            name="cf_password"
            value={cf_password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          cadastro
        </button>
      </form>
    </div>
  )
}

export default cadastro
