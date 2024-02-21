import React from 'react'
import { Link } from 'react-router-dom';
import Entradas from '../Entradas';

const Home = () => {
  return (
    <>
    <Link to="/entradas">Entradas</Link>
    <Link to="/saidas">Saídas</Link>
    </>

    
  )
}

export default Home