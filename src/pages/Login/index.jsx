import { useState } from "react";
import style from "./Login.module.css";


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   console.log("Funfou")
 
  }


  return (
    <div className={style.login}>
        <h1>Fazer Login</h1>
        <p>Preencha os dados corretamente para acessar a sua conta.</p>
        <form onSubmit={handleSubmit}>
          <label>
          <span>E-mail:</span>
          <input 
          type="email"
          name='email'
          required
          placeholder='E-mail cadastrado'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
          </label>

          <label>
          <span>Senha:</span>
          <input 
          type="password"
          name='password'
          required
          placeholder='Insira sua senha'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
          </label>
          <button className='btn'>Entrar</button>
        </form>
    </div>
  )
}

export default Login