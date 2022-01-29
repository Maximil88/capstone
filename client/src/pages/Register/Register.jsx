import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/v1/users/register', { email, password })
      .then(res => {
        alert('Registered Successfully')
        navigate('/login')
      })
      .catch(err => {
        console.log(err.response)
        alert(err.response.data.error)
      })
}


  return (
  <div >
    <h1>Register</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required/>
      </p>
      <p>
        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required/>
      </p>
      <button type="submit">Register</button>
    </form>
  </div>
  )
};

export default Register;
