import React from 'react'
import sproutLogo from '../sprout-logo.svg';
import sproutLetter from '../sprout-letter.svg'
import { Table } from '../components'
import { useHistory } from 'react-router';

export default function Home() {
  const history = useHistory()
  
  async function handleSignOut(e) {
    e.preventDefault()
    localStorage.clear()
    await history.push('/login')
  }
  return (
    <div>
      <div className="logo d-flex justify-content-center  mt-5" >
        <img  src={sproutLogo} alt="sprout logo"/>
        <img  src={sproutLetter} alt="sprout logo"/>
      </div>
      <div className="box mt-5 " >
        <div className="header d-flex justify-content-center col mt-5" >
          <h3 className="headerText mt-5" style={{ fontWeight: 'bold', marginRight: '5px' }}>Great,</h3>
          <h3 className="headerText mt-5" style={{ fontStyle: 'italic', marginRight: '5px' }}>*Name*</h3>
          <h3 className="headerText mt-5" style={{ fontWeight: 'bold' }}>! Here's your registered name</h3>
        </div>
        <div>
          <Table />     
        </div>
        <button className="button position-absolute bottom-0 start-50 translate-middle-x mb-5" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}