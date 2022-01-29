import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/v1/users/login', { email, password })
      .then(res => {
        alert('Logged in Successfully')
        window.location='/favorites'
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        console.log(err.response)
        alert(err.response.data.error)
      })
}


  return (
  <div className='background'>
    <h1>Login</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlfor="email">Email</label><br />
        <input type="email" id="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required/>
      </p>
      <p>
        <label htmlfor="password">Password</label><br />
        <input type="password" id="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required/>
      </p>
      <button type="submit">Login</button>
    </form>
  </div>
  )
};

export default Login;
