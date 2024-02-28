import React, { useState } from "react"
import "./LoginSignup.css"
import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"
import logo_icon from "../Assets/butterfly-logo.png"
import { useNavigate } from "react-router-dom"
import {
  signIn,
  signUp,
  signOut,
  currentAuthenticatedUser,
} from "aws-amplify/auth"

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

  const handleClickLogin = async (event) => {
    setAction("Login")

    if (username.trim() !== "" && password.trim() !== "") {
      try {
        const result = await signInUser(username, password)

        switch (result) {
          case "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED":
            console.log("Confirm sign in with new password required", result)
            break
          case "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE":
            console.log("Confirm sign in with custom challenge", result)
            break
          case "CONFIRM_SIGN_IN_WITH_TOTP_CODE":
            console.log("Confirm sign in with TOTP code", result)
            break
          case "CONTINUE_SIGN_IN_WITH_TOTP_SETUP":
            console.log("Continue sign in with TOTP setup", result)
            break
          case "CONFIRM_SIGN_IN_WITH_SMS_CODE":
            console.log("Confirm sign in with SMS code", result)
            break
          case "CONTINUE_SIGN_IN_WITH_MFA_SELECTION":
            console.log("Continue sign in with MFA selection", result)
            break
          case "RESET_PASSWORD":
            console.log("Reset password", result)
            break
          case "CONFIRM_SIGN_UP":
            console.log("Confirm sign up", result)
            break
          case "DONE":
            console.log("Done", result)
            navigate("/dash")
            break
          default:
            console.log("CANNOT SIGN IN", result)
        }
      } catch (error) {
        console.log("ERROR SIGNING IN", error)
      }
    }
  }

  const handleClickCreateAccount = async (event) => {
    setAction("Create Account")

    if (
      organization.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword
    ) {
      const signUpResult = await signUpUser(username, password, organization)

      switch (signUpResult) {
        case "CONFIRM_SIGN_UP":
          console.log("CONFIRM_SIGN_UP")
          navigate("/setup")
          break
        case "DONE":
          console.log("DONE")
          break
        case "COMPLETE_AUTO_SIGN_IN":
          console.log("COMPLETE_AUTO_SIGN_IN")
          break
        default:
          console.log("Default case")
          break

        //navigate("/setup")
      }
    } else {
      console.log("Error: Passwords do not match")
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

async function signInUser(username, password) {
  try {
    const user = await signIn({ username, password })
    return user.nextStep.signInStep
  } catch (error) {
    console.log("ERROR ON SIGN IN", error)
    if (error.name == "UserAlreadyAuthenticatedException") {
      console.log("USER SIGNED IN ALREADY")
      await forceSignOut()
    }
  }
}

async function signUpUser(username, password, organization) {
  try {
    const user = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email: username,
          phone_number: "+1234567890",
          name: "John Doe",
          //"custom:organization": organization,
        },
      },
    })
    console.log("user", user)
    return user.nextStep.signUpStep
  } catch (error) {
    console.log("error signing up", error)
  }
}

async function forceSignOut() {
  try {
    //const user = await currentAuthenticatedUser()
    const result = await signOut()
    console.log("result", result)
  } catch (error) {
    console.log("error forcing sign out", error)
  }
}

export default LoginSignup
