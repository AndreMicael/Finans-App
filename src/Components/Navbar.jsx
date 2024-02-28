import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
     <nav className={styles.navbar}>
         <NavLink to='/' className={styles.brand}><span>Finans</span></NavLink>

         <ul className={styles.links_list}>

         <li>
          <NavLink className={({isActive}) => (isActive? styles.active : '')} to='/'>Início</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive? styles.active : '')} to='/login'>Entrar</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive? styles.active : '')} to='/cadastrar'>Cadastrar</NavLink>
        </li>

         </ul>
        
    </nav>
       
    
  )
}

export default Navbar