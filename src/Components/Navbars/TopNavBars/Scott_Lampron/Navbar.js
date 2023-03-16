import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user = useSelector((state) => state.user)
console.log(user)
  return (
   <>
    <header className="box-shadow">
    <div  className="section logo">
      <span  className="white">the</span><span class="green">devplace</span>
    </div>

    <div className="section">
      <ul>
        <li><a className="active" href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </header>
   </>
  )
}

export default Navbar