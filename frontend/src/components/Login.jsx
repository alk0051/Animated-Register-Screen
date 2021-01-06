import React, { useState } from 'react'
import '../styles/Register.css'
import api from '../services/api';

export default function Register() {
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit() {
    const data = { 
      firstName,
      lastName,
      email,
      password,
    }
    
    const registerUser = api.post('/createUser', data);
    
    if(registerUser.status === 201) {
      alert('Usuario cadastrado!')
    }else {
      console.log(registerUser.status);
    }
  }

  return (
    <form>

      <label>E-mail</label><br/>
      <input 
        type="text"
        value={email}
        onChange={ e => setEmail(e.target.value) }

      /><br/><br/>
      
      <label>Senha</label><br/>
      <input 
        type="password"
        value={password}
        onChange={ e => setPassword(e.target.value) }
        
      /><br/><br/>

      <button className="submit" type="button" onClick={handleSubmit} >Criar conta</button>
    </form>
  )
}