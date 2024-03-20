import React, { useEffect } from "react"
import "./App.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import routes from "./routes"
import { getCurrentUser } from "@aws-amplify/auth"

function PrivateRoute({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    checkAuthState()
  }, [])

  async function checkAuthState() {
    try {
      await getCurrentUser()
    } catch {
      navigate("/")
    }
  }

  return <>{children}</>
}

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) =>
          route.isProtected ? (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoute>{route.element}</PrivateRoute>}
            />
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </div>
  )
}

export default App
