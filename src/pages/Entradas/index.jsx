import "./entrada.css"
import { useState } from "react";

const Entradas = () => {

  const [advice,setAdvice] = useState('');

  fetch('../../data/dados.json').then((res) => res.json()).then((data) => setAdvice(data));
  console.log(advice);

  return (
    <>
    </>

  )
}

export default Entradas