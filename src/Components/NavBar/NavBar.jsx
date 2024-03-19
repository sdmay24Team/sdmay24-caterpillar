import React from "react"
import { Link } from "react-router-dom"
import home_logo from "../Assets/butterfly-logo.png"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/dash" className="home-link">
        <img src={home_logo} alt="go home" className="home-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/import">Import Records</Link>
        </li>
        <li>
          <Link to="/view">View Records</Link>
        </li>
        <li>
          <Link to ="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
        <li>
          <Link to ="/createRecord">Create Record</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
