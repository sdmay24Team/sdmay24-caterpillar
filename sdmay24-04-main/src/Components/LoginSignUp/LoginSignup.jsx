import React, { useState } from "react"
import "./LoginSignup.css"
import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"
import logo_icon from "../Assets/butterfly-logo.png"
import { useNavigate } from "react-router-dom"

export const LoginSignup = () => {
  // Login Variables
  const [action, setAction] = useState("Login")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Create Account Variables
  const [organization, setOrganization] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleReenterPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleClickLogin = (event) => {
    setAction("Login")
    if (username.trim() !== "" && password.trim() !== "") {
      navigate("/dash")
    }
  }

  const handleClickCreateAccount = (event) => {
    setAction("Create Account")

    if (
      organization.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword
    ) {
      navigate("/dash")
    }
  }

  return (
    <div className="container">
      <div className="header-image">
        <img src={logo_icon} alt="website logo" />
      </div>

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="organization image" />
            <input
              type="text"
              placeholder="Organization"
              onChange={handleOrganizationChange}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="email image" />
          <input
            type="email"
            placeholder="Email"
            onChange={handleUsernameChange}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="password image" />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>

        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={password_icon} alt="password image" />
            <input
              type="password"
              placeholder="Re-enter Password"
              onChange={handleReenterPasswordChange}
            />
          </div>
        )}
      </div>

      {action === "Create Account" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>{" "}
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={handleClickCreateAccount}
        >
          Create Account
        </div>
        <div
          className={action === "Create Account" ? "submit gray" : "submit"}
          onClick={handleClickLogin}
        >
          Login
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
