import React from 'react'
import { Link } from 'react-router-dom'

const Transacoes = () => {
  return (
    <div>
      <Link to="/entradas">Entradas</Link>
      <Link to="/saidas">Saídas</Link>

    </div>
  )
}

export default Transacoes