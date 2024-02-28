import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Entrada from './pages/Entradas';
import Saidas from './pages/Saidas';
import Transacoes from './pages/Transacoes';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import Cadastrar from './pages/Cadastrar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>  
   <Navbar/> 
      <Routes>     
         <Route exact path='/login' element={<Login />} />      
         <Route exact path='/cadastrar' element={<Cadastrar />} />   
          <Route exact path='/' element={<Home />} />
          <Route path='/transacoes' element={<Transacoes/>}/>
          <Route path="/entradas" element={<Entrada />} />
          <Route path="/saidas" element={<Saidas />} />   
           </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
