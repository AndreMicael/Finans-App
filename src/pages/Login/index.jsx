import { useState } from "react";
import "./Login.module.css";


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <div>
        <h1>Fazer Login</h1>
        <p>Preencha os dados corretamente para acessar a sua conta.</p>
        <form>
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
        </form>
    </div>
  )
}

export default Login