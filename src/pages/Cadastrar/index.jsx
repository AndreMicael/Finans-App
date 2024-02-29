import styles from './Register.module.css';
import { useState } from 'react';

const Cadastrar = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,setError] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.register}>
        <h1>Cadastre-se</h1>
      <p>Você está a um passo do controle financeiro</p>
      <form className='container' onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          type="text"
          name='displayName'
          required
          placeholder='Nome do Usuário'
          value={displayName}
          onChange={(e)=> setDisplayName(e.target.value)}/>
        </label>

        <label>
          <span>Email:</span>
          <input 
          type="email"
          name='email'
          required
          placeholder='E-mail do Usuário'
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
        <label>
          <span>Confirmar Senha:</span>
          <input 
          type="password"
          name='repeatPassword'
          required
          placeholder='Confirme a sua senha '
          value={confirmPassword}
          onChange={(e)=> setConfirmPassword(e.target.value)}/>
        </label>
      <button className='btn'>Cadastrar</button>
     
    
      </form>

    </div>
  )
}

export default Cadastrar