import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const cadastro = () => {
  return (
    <div>
      <Head>
        <title>Cadastro de Usuário</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
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
