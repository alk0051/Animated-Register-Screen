import React from 'react'
import '../styles/Register.css'

export default function Register() {
  return (
    <form>
      <label>First Name</label><br/>
      <input type="text" /><br/><br/>
      <label>Last Name</label><br/>
      <input type="text"/><br/><br/>
      <label>E-mail</label><br/>
      <input type="text"/><br/><br/>
      <label>Password</label><br/>
      <input type="password"/><br/><br/>
      <label>Confirm password</label><br/>
      <input type="password"/><br/><br/>
    </form>
  )

}