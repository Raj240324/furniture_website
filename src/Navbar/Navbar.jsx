import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
        <div className='nav-welcome'>Furniking</div>
        <div className="dropdown">
            <div className='language'>English</div>
            <select name="currency" id="currency">(USD)
                <option value="USD">(USD)</option>
                <option value="EURO">(EUR)</option>
                <option value="YEN">(YEN)</option>
                <option value="INDIAN RUPEE">(INR)</option>
            </select>
            <hr className='hr'/>
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Signup</button>
           

        </div>
    </div>
      
    </>
  )
}

export default Navbar
