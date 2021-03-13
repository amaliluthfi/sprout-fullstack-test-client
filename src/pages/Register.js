import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import sproutLogo from '../sprout-logo.svg'
import sproutLetter from '../sprout-letter.svg'
import { signUp } from '../store/actions/userAction' 
import { useDispatch } from 'react-redux'

export default function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: ''
  })

  function handleChange(e) {
    const { name, value }  = e.target
    setNewUser({...newUser, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(newUser.password !== newUser.passwordConfirmation) console.log('password and password confirmation must similar');
    dispatch(signUp(newUser))
    history.push("/login")
  }

  return (
      <div>
      <div className="logo d-flex justify-content-center  mt-5" >
        <img  src={sproutLogo} alt="sprout logo"/>
        <img  src={sproutLetter} alt="sprout logo"/>
      </div>
      <div className="box mt-5 " >
        <div className="header d-flex justify-content-center row mt-5" >
          <h3 className="headerText mt-5" style={{ fontWeight: 'bold', marginRight: '5px' }}>Sign Up</h3>
          <p className="subText">Welcome to Sprout Digital Labs</p>
        </div>
        <div className=" container d-flex justify-content-center">
          <form className="mt-4" onSubmit={handleSubmit}>
            <input style={{ marginTop: '40px' }}  type="text" placeholder="Name" name="name" onChange={handleChange}/><br></br>
            <input classname="" style={{ marginTop: '20px', border: '1px solid #C9C6C0' }}  type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange}/><br></br>
            <input classname="" style={{ marginTop: '20px', border: '1px solid #C9C6C0' }}  type="text" placeholder="Email" name="email" onChange={handleChange}/><br></br>
            <input classname="" style={{ marginTop: '20px', border: '1px solid #C9C6C0' }}  type="password" placeholder="Password" name="password" onChange={handleChange}/><br></br>
            {
              (newUser.password !== newUser.passwordConfirmation) && <p style={{ color: '#ac0d0d', fontSize: '12px', fontFamily: 'Poppins', marginBottom: '-10px' }}>password and password confirmation must similar</p>
            }
            <input classname="" style={{ marginTop: '20px', marginBottom: '40px', border: '1px solid #C9C6C0' }}  type="password" placeholder="Password Confirmation" name="passwordConfirmation" onChange={handleChange}/><br></br>
            <button className="mt-5" type="submit">Sign Up</button>
          </form>
        </div>
        <p className="position-absolute bottom-0 start-50 translate-middle-x mb-5" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px' }}>Already have an account ? <Link to="/login" style={{ color: '#F69621', textDecoration: 'none' }}>Log In</Link></p>
      </div>
    </div>
  )
}