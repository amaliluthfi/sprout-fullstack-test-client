import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import sproutLogo from '../sprout-logo.svg'
import sproutLetter from '../sprout-letter.svg'
import { signIn } from '../store/actions/userAction'
import { useDispatch } from 'react-redux'

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    const {name, value} = e.target
    setUser({...user, [name]: value}) 
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(signIn(user))
    if (!localStorage.access_token) {
      setTimeout(function(){ 
        history.push('/')
      }, 1000); 
    }
      // history.push('/')
    }
  
  
  return (
      <div>
      <div className="logo d-flex justify-content-center  mt-5" >
        <img  src={sproutLogo} alt="sprout logo"/>
        <img  src={sproutLetter} alt="sprout logo"/>
      </div>
      <div className="box mt-5 " >
        <div className="header d-flex justify-content-center row mt-5" >
          <h3 className="headerText mt-5" style={{ fontWeight: 'bold', marginRight: '5px' }}>Sign In</h3>
          <p className="subText">Welcome Back to Sprout Digital Labs</p>
        </div>
        <div className=" container d-flex justify-content-center">
          <form className="mt-5" onSubmit={handleSubmit}>
            <input classname="mt-5" style={{ marginTop: '60px' }}  type="text" placeholder="Email" name= "email" onChange={handleChange}/><br></br>
            <input classname="mt-5" style={{ marginTop: '20px'}}  type="password" placeholder="Password" name= "password" onChange={handleChange}/><br></br>
            <p style={{ fontFamily: 'Poppins', textAlign: 'end', color: '#F69621', fontWeight: '400', fontSize: '12px', marginBottom: '30px'  }}>Forgot Password ?</p>
            <button className="mt-5" type="submit">Sign In</button>
          </form>
        </div>
        <p className="position-absolute bottom-0 start-50 translate-middle-x mb-5" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px' }}>New to Sprout ? <Link to="/register" style={{ color: '#F69621', textDecoration: 'none' }}>Create account</Link></p>
      </div>
    </div>
  )
}