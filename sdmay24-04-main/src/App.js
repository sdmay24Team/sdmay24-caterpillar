import "./App.css"
import { Route, Routes } from "react-router-dom"
import routes from "./routes"

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}

export default App
