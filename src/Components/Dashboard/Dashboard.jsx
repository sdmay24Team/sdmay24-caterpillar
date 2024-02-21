import React from "react"
import "./Dashboard.css"
import NavBar from "../NavBar"

export const Dashboard = () => {
  return (
    <div className="container1">
      <NavBar />
      <div>
        <div className="dashtext">Welcome!</div>
      </div>
    </div>
  )
}

export default Dashboard
